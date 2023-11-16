import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chave } from '../../model/chave.model';

@Injectable()
export class ChaveService {
  constructor(
    @InjectModel('Chave') private readonly chaveModel: Model<Chave>,
  ) {}

  async listarChaves(): Promise<Chave[]> {
    return await this.chaveModel.find().exec();
  }
}
