import { Injectable } from '@nestjs/common';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectRepository(Concepto)
    private conceptoRepository: Repository<Concepto>,
  ) {}


  async create(createConceptoDto: CreateConceptoDto) {
    const concepto = this.conceptoRepository.create(createConceptoDto); 
    return await this.conceptoRepository.save(concepto);
  }

  async findAll() {
    return await this.conceptoRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: number) {
    return await this.conceptoRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: number, updateConceptoDto: UpdateConceptoDto) {
    const updated = await this.conceptoRepository.update(id, updateConceptoDto);
    return updated.affected > 0 ? await this.conceptoRepository.findOne({ where: { id, estado: 'activo' } }) : null
  }

  async remove(id: number) {
    const concepto = await this.conceptoRepository.findOne({ where: {id} });
    if (concepto) {
      concepto.estado = 'inactivo';
      return this.conceptoRepository.save(concepto);
    }
    return null;
  }
}
