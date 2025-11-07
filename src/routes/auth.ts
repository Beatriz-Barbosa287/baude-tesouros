import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
//npm install bcryptjs

//npm install --save-dev @types/bcryptjs
const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;
    const exist = await Usuario.findOne({ email });
    if (exist) return res.status(409).json({ error: 'E-mail já cadastrado' });

    const hashed = await bcrypt.hash(senha, 10);
    const user = await Usuario.create({ nome, email, senha: hashed, tipo: tipo ?? 'responsavel' });
    res.json({ id: user._id, nome: user.nome, email: user.email, tipo: user.tipo });
  } catch (e) {
    res.status(400).json({ error: 'Erro ao registrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const user = await Usuario.findOne({ email });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const ok = await bcrypt.compare(senha, user.senha);
  if (!ok) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: user._id, email: user.email, tipo: user.tipo }, process.env.JWT_SECRET!, { expiresIn: '2d' });
  res.json({ token, usuario: { id: user._id, nome: user.nome, email: user.email, tipo: user.tipo } });
});

export default router;
