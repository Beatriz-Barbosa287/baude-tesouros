import { Schema, model } from 'mongoose';

const ContatoSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    assunto: { type: String, required: true },
    mensagem: { type: String, required: true }
  },
  { timestamps: true }
);

export default model('Contato', ContatoSchema);
