import { Router } from 'express';
import { auth } from '../config/firebase.js';

const router = Router();

// Opcional: criar usuário via Admin (use apenas para testes / scripts)
router.post('/create', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;
    const user = await auth.createUser({ email, password, displayName });
    res.json(user);
  } catch (err: any) {
    console.error('Erro ao criar usuário Firebase:', err);
    res.status(400).json({ error: err.message || 'Erro ao criar usuário' });
  }
});

export default router;
