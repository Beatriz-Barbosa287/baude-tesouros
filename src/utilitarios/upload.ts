import multer from 'multer';

// Armazena arquivos em memória para fazer upload ao Firebase Storage
export const uploadMemory = multer({ storage: multer.memoryStorage() });
