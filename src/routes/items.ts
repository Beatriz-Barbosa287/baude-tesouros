import { Router } from 'express';
import { db, bucket } from '../config/firebase.js';
import { requireAuth } from '../middlewares/auth.js';
import { uploadMemory } from '../utilitarios/upload.js';
import { v4 as uuid } from 'uuid';
//npm install uuid
//npm install --save-dev @types/uuid

const router = Router();

// GET /items/:tipo?venda|troca|doacao
router.get('/:tipo', async (req, res) => {
  try {
    const { tipo } = req.params;
    const limit = Math.min(50, Number(req.query.limit) || 10);
    const after = req.query.after as string | undefined;

    let query = db.collection('itens')
      .where('tipo', '==', tipo)
      .orderBy('createdAt', 'desc')
      .limit(limit);

    if (after) {
      const afterDoc = await db.collection('itens').doc(after).get();
      if (afterDoc.exists) {
        query = query.startAfter(afterDoc);
      }
    }

    const snap = await query.get();
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    const nextPageToken = snap.docs.length ? snap.docs[snap.docs.length - 1].id : null;

    res.json({ items, nextPageToken });
  } catch (err) {
    console.error('Erro ao listar itens:', err);
    res.status(500).json({ error: 'Erro ao listar itens' });
  }
});

// POST /items  (criar item) - autenticado
router.post(
  '/',
  requireAuth,
  uploadMemory.array('imagens', 8),
  async (req, res) => {
    try {
      const { titulo, descricao, tipo, preco, condicao, faixaEtaria, local } = req.body;
      const user = (req as any).user;

      const uploadedUrls: string[] = [];
      const files = (req.files as Express.Multer.File[] | undefined) ?? [];

      for (const file of files) {
        const filename = `${uuid()}-${file.originalname}`;
        const blob = bucket.file(filename);
        await blob.save(file.buffer, {
          contentType: file.mimetype,
          public: true,
          metadata: { cacheControl: 'public, max-age=31536000' },
        });
        uploadedUrls.push(`https://storage.googleapis.com/${bucket.name}/${filename}`);
      }

      const data = {
        titulo,
        descricao: descricao ?? '',
        tipo,
        preco: tipo === 'venda' && preco ? Number(preco) : null,
        condicao,
        faixaEtaria: faixaEtaria ?? '',
        local,
        imagens: uploadedUrls,
        usuarioId: user.uid,
        createdAt: new Date(),
      };

      const docRef = await db.collection('itens').add(data);
      const saved = await docRef.get();

      res.json({ id: docRef.id, ...saved.data() });
    } catch (err) {
      console.error('Erro ao criar item:', err);
      res.status(400).json({ error: 'Erro ao criar item' });
    }
  }
);

export default router;
