import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    senha: { type: String, required: true },
    tipo: { type: String, enum: ['responsavel', 'admin'], default: 'responsavel' }
  },
  { timestamps: true }
);

export default model('Usuario', UsuarioSchema);
