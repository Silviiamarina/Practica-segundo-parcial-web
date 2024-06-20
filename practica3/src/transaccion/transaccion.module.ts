import { Module } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { TransaccionController } from './transaccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';

@Module({
  controllers: [TransaccionController],
  providers: [TransaccionService],

  imports: [TypeOrmModule.forFeature([Transaccion])],
  exports: [TypeOrmModule]
})
export class TransaccionModule {}
