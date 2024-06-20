import { Module } from '@nestjs/common';
import { CajaService } from './caja.service';
import { CajaController } from './caja.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caja } from './entities/caja.entity';

@Module({
  controllers: [CajaController],
  providers: [CajaService],

  imports: [TypeOrmModule.forFeature([Caja])],
  exports: [TypeOrmModule]
})
export class CajaModule {}
