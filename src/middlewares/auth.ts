import { Request, Response, NextFunction } from 'express';
import { auth } from '../config/firebase.js';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token ausente' });
    }
    const token = header.split(' ')[1];
    const decoded = await auth.verifyIdToken(token);
    (req as any).user = decoded;
    next();
  } catch (err) {
    console.error('Erro ao validar token Firebase:', err);
    return res.status(401).json({ error: 'Token inválido' });
  }
}
