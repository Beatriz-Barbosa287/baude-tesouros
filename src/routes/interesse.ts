import { Router } from 'express';
import { db } from '../config/firebase.js';
import type { InteresseDoc, Interesse, TipoInteresse } from '../models/models.js';

const router = Router();


router.post('/', async (req, res) => {
  try {
    const {
      idItem,
      tipo,
      nomeInteressado,
      emailInteressado,
      telefone,
      cidade,
      uf,
      endereco,
      nomeItemOferta,
      valorOferta,
      mensagem,
    } = req.body as {
      idItem: string;
      tipo: TipoInteresse;
      nomeInteressado: string;
      emailInteressado: string;
      telefone?: string;
      cidade?: string;
      uf?: string;
      endereco?: string;
      nomeItemOferta?: string;
      valorOferta?: number;
      mensagem: string;
    };

    if (!idItem || !tipo || !nomeInteressado || !emailInteressado || !mensagem) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }

    // Busca o item para descobrir quem é o dono (usuarioId)
    const itemSnap = await db.collection('itens').doc(idItem).get();
    if (!itemSnap.exists) {
      return res.status(404).json({ error: 'Item não encontrado.' });
    }

    const itemData = itemSnap.data() as { usuarioId: string };
    const idDonoItem = itemData.usuarioId;

    const agora = new Date();

    const docData: InteresseDoc = {
      idItem,
      idDonoItem,
      tipo,
      nomeInteressado,
      emailInteressado,
      telefone,
      cidade,
      uf,
      endereco,
      nomeItemOferta,
      valorOferta: valorOferta ?? null,
      mensagem,
      lido: false,
      createdAt: agora,
    };

    const ref = await db.collection('interesses').add(docData);
    const snap = await ref.get();

    const interesse: Interesse = {
      id: ref.id,
      ...(snap.data() as InteresseDoc),
    };

    // Aqui no futuro você pode disparar um e-mail ou notificação
    // para o dono do item, usando idDonoItem.

    res.status(201).json(interesse);
  } catch (err) {
    console.error('Erro ao registrar interesse:', err);
    res.status(500).json({ error: 'Erro ao registrar interesse' });
  }
});

export default router;