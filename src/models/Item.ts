import { Schema, model, Types } from 'mongoose';

const ItemSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String, default: '' },
    tipo: { type: String, enum: ['venda', 'troca', 'doacao'], required: true },
    preco: { type: Number, default: null },        // apenas para 'venda'
    condicao: { type: String, enum: ['novo', 'seminovo', 'usado'], default: 'seminovo' },
    faixaEtaria: { type: String, default: '' },
    local: { type: String, required: true },
    imagens: [{ type: String }],                   // caminhos /uploads/arquivo.jpg
    usuarioId: { type: Types.ObjectId, ref: 'Usuario', required: true }
  },
  { timestamps: true }
);

export default model('Item', ItemSchema);
