import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServidorService } from './service/servidor/servidor.service';

@Module({
  controllers: [ControllerController],
  providers: [ServidorService]
})
export class ServidorModule {}
