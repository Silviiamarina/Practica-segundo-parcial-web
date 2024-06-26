import { Module } from '@nestjs/common';
import { TransaccionesService } from './transaccion.service';
import { TransaccionesResolver } from './transaccion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';

@Module({
  providers: [TransaccionesResolver, TransaccionesService],
  imports: [TypeOrmModule.forFeature([Transaccion])],
  exports: [TypeOrmModule]
})
export class TransaccionesModule {}
