import { Router } from 'express';
import Item from '../models/Item.js';
import { upload } from '../utilitarios/upload.js';
import { requireAuth } from '../middlewares/auth.js';

const router = Router();

/** Listar itens por tipo com paginação: /items/venda?pag=1&limit=10 */
router.get('/:tipo', async (req, res) => {
  const { tipo } = req.params;                      // 'venda' | 'troca' | 'doacao'
  const pag = Math.max(1, Number(req.query.pag) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));
  const skip = (pag - 1) * limit;

  const [items, total] = await Promise.all([
    Item.find({ tipo }).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Item.countDocuments({ tipo })
  ]);

  res.json({ items, pag, total, totalPaginas: Math.ceil(total / limit) });
});

/** Criar item (autenticado) com imagens multipart */
router.post('/', requireAuth, upload.array('imagens', 8), async (req, res) => {
  try {
    const { titulo, descricao, tipo, preco, condicao, faixaEtaria, local } = req.body;
    const usuarioId = (req as any).user.id;

    const imagens = (req.files as Express.Multer.File[] | undefined)?.map(f => `/uploads/${f.filename}`) ?? [];

    const item = await Item.create({
      titulo,
      descricao,
      tipo,
      preco: tipo === 'venda' && preco ? Number(preco) : null,
      condicao,
      faixaEtaria,
      local,
      imagens,
      usuarioId
    });

    res.json(item);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao cadastrar item' });
  }
});

/** (Opcional) Remover/Atualizar item — adicionar quando precisar */
export default router;
