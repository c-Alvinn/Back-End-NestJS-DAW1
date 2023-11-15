import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { EmprestimoService } from './service/emprestimo/emprestimo.service';

@Module({
  controllers: [ControllerController],
  providers: [EmprestimoService]
})
export class EmprestimoModule {}
