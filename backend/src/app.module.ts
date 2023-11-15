import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChaveModule } from './chave/chave.module';
import { ServidorModule } from './servidor/servidor.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';

@Module({
  imports: [ChaveModule, ServidorModule, EmprestimoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
