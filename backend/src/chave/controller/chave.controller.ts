import { Controller, Get } from '@nestjs/common';
import { ChaveService } from '../service/chave/chave.service';
import { Chave } from '../model/chave.model';

@Controller('chave')
export class ChaveController {
  constructor(private readonly chaveService: ChaveService) {}

  @Get()
  async listarChaves(): Promise<Chave[]> {
    return this.chaveService.listarChaves();
  }
}

export { Controller };
