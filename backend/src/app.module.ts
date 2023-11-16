import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChaveController } from './chave//controller/chave.controller';
import { ChaveSchema } from './chave/model/chave.model';
import { ChaveService } from './chave/service/chave/chave.service';
import { EmprestimoSchema } from './emprestimo/model/emprestimo.model';
import { ServidorSchema } from './servidor/model/servidor.model';

@Module({
 imports: [
   //ChaveModule, ServidorModule, EmprestimoModule,
   MongooseModule.forRoot('mongodb://localhost:27017'),
   MongooseModule.forFeature([{name: 'Chave', schema : ChaveSchema}]),
   MongooseModule.forFeature([{ name: 'Emprestimo', schema: EmprestimoSchema }]),
   MongooseModule.forFeature([{ name: 'Servidor', schema: ServidorSchema }]),
 ],
 controllers: [AppController, ChaveController],
 providers: [AppService, ChaveService],
})
export class AppModule {}