import { Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Caja } from './entities/caja.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CajaService {
  constructor(
    @InjectRepository(Caja)
    private cajaRepository: Repository<Caja>,
  ) {}


  async create(createCajaDto: CreateCajaDto) {
    const caja = this.cajaRepository.create(createCajaDto); 
    return await this.cajaRepository.save(caja);
  }

 async findAll() {
    return await this.cajaRepository.find({ where: { estado: 'activo' } });
  }

  async findOne(id: number) {
    return await this.cajaRepository.findOne({ where: { id, estado: 'activo' } });
  }

  async update(id: number, updateCajaDto: UpdateCajaDto) {
    const updated = await this.cajaRepository.update(id, updateCajaDto);
    return updated.affected > 0 ? await this.cajaRepository.findOne({ where: { id, estado: 'activo' } }) : null;
  }

  async remove(id: number) {
    const caja = await this.cajaRepository.findOne({ where: {id} });
    if (caja) {
      caja.estado = 'inactivo';
      return this.cajaRepository.save(caja);
    }
    return null;
  }
}
