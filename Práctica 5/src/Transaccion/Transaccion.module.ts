import { Module } from '@nestjs/common';
import { TransaccionService } from './Transaccion.service';
import { TransaccionGateway } from './Transaccion.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransaccionEntiti } from './entiti/entiti.Transaccion';

@Module({
  providers: [TransaccionGateway, TransaccionService],
  imports: [TypeOrmModule.forFeature([TransaccionEntiti])],
  exports: [TypeOrmModule]
})
export class TransaccionModule {}
