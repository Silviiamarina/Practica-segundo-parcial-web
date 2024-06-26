import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCajaInput } from './dto/create-caja.input';
import { UpdateCajaInput } from './dto/update-caja.input';
import { Repository } from 'typeorm';
import { Caja } from './entities/caja.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CajasService {
  constructor(
    @InjectRepository(Caja)
    private readonly cajaRepository: Repository<Caja>,
  ) { }

  async create(createCajaInput: CreateCajaInput): Promise<Caja> {
    const newCaja = this.cajaRepository.create(createCajaInput);
    return await this.cajaRepository.save(newCaja);
  }

  async findAll(estado: string): Promise<Caja[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.cajaRepository.find({ where: { estado } });
    }
    return await this.cajaRepository.find();
  }

  async findOne(id: number): Promise<Caja> {
    const caja = await this.cajaRepository.findOneBy({ id });
    if (!caja) throw new NotFoundException('Caja not found');
    return caja;
  }

  async update(id: number, updateCajaInput: UpdateCajaInput): Promise<Caja> {
    const caja = await this.cajaRepository.preload({
      id: id,
      ...updateCajaInput,
    });

    if (!caja) throw new NotFoundException(`Caja with id: ${id} not found`);

    return this.cajaRepository.save(caja);
  }

  async remove(id: number): Promise<Caja> {
    const caja = await this.cajaRepository.findOneBy({ id });
    if (caja) {
      caja.estado = 'inactivo';
      return this.cajaRepository.save(caja);
    }
    return null;
  }
}
