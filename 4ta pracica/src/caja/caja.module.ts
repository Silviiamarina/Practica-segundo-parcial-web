import { Module } from '@nestjs/common';
import { CajasService } from './caja.service';
import { CajasResolver } from './caja.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caja } from './entities/caja.entity';

@Module({
  providers: [CajasResolver, CajasService],
  imports: [TypeOrmModule.forFeature([Caja])],
  exports: [TypeOrmModule]
})
export class CajasModule {}

