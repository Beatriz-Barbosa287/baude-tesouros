import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'Token ausente' });
    const token = header.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = payload;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}
//npm install jsonwebtoken @types/jsonwebtoken
