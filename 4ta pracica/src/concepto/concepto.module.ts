import { Module } from '@nestjs/common';
import { ConceptosService } from './concepto.service';
import { ConceptosResolver } from './concepto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';

@Module({
  providers: [ConceptosResolver, ConceptosService],
  imports: [TypeOrmModule.forFeature([Concepto])],
  exports: [TypeOrmModule]
})
export class ConceptosModule {}
