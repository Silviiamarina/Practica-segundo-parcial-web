import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';
import { Repository } from 'typeorm';
import { Concepto } from './entities/concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConceptosService {
  constructor(
    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>,
  ) { }

  async create(createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    const newConcepto = this.conceptoRepository.create(createConceptoInput);
    return await this.conceptoRepository.save(newConcepto);
  }

  async findAll(estado: string): Promise<Concepto[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.conceptoRepository.find({ where: { estado } });
    }
    return await this.conceptoRepository.find();
  }

  async findOne(id: number): Promise<Concepto> {
    const concepto = await this.conceptoRepository.findOneBy({ id });
    if (!concepto) throw new NotFoundException('Concepto not found');
    return concepto;
  }

  async update(id: number, updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    const concepto = await this.conceptoRepository.preload({
      id: id,
      ...updateConceptoInput,
    });

    if (!concepto) throw new NotFoundException(`Concepto with id: ${id} not found`);

    return this.conceptoRepository.save(concepto);
  }

  async remove(id: number): Promise<Concepto> {
    const concepto = await this.conceptoRepository.findOneBy({ id });
    if (concepto) {
      concepto.estado = 'inactivo';
      return this.conceptoRepository.save(concepto);
    }
    return null;
  }
}
