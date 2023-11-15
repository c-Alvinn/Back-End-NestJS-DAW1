import { Module } from '@nestjs/common';
import { Controller } from './controller/.controller';
import { ChaveService } from './service/chave/chave.service';

@Module({
  controllers: [Controller],
  providers: [ChaveService]
})
export class ChaveModule {}
