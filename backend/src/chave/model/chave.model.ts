import * as mongoose from 'mongoose';

export const ChaveSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  situacao: {
    type: String,
    required: true,
  },
  status: Boolean,
});

export interface Chave extends mongoose.Document {
  nome: string;
  situacao: string;
  status: boolean;
}
