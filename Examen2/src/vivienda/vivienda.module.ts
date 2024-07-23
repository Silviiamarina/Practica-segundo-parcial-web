import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViviendaService } from './vivienda.service';
import { ViviendaController } from './vivienda.controller';
import { Vivienda } from './entities/vivienda.entity';

@Module({
  controllers: [ViviendaController],
  providers: [ViviendaService],
  imports: [TypeOrmModule.forFeature([Vivienda])],
  exports: [TypeOrmModule],
})
export class ViviendaModule {}