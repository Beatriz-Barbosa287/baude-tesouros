import { Router } from 'express';
import { db } from '../config/firebase.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;
    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({ error: 'Campos obrigatórios' });
    }

    const ref = await db.collection('contatos').add({
      nome,
      email,
      assunto,
      mensagem,
      createdAt: new Date(),
    });

    const snap = await ref.get();
    res.json({ id: ref.id, ...snap.data() });
  } catch (err) {
    console.error('Erro ao salvar contato:', err);
    res.status(400).json({ error: 'Erro ao enviar mensagem' });
  }
});

export default router;
