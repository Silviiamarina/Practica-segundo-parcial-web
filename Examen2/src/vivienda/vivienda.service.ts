import { Injectable } from '@nestjs/common';
import { CreateViviendaDto } from './dto/create-vivienda.dto';
import { UpdateViviendaDto } from './dto/update-vivienda.dto';
import { Repository } from 'typeorm';
import { Vivienda } from './entities/vivienda.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ViviendaService {
  constructor(
    @InjectRepository(Vivienda)
    private readonly viviendaRepository: Repository<Vivienda>
  ) {}

  async create(createViviendaDto: CreateViviendaDto) {
    const vivienda = this.viviendaRepository.create(createViviendaDto);
    await this.viviendaRepository.save(vivienda);
    return vivienda;
  }

  async findAll() {
    return this.viviendaRepository.find();
  }

  async findOne(id: number) {
    return this.viviendaRepository.findOneBy({ id });
  }

  async update(id: number, updateViviendaDto: UpdateViviendaDto) {
    const updated = await this.viviendaRepository.update(id, updateViviendaDto);
    return updated.affected > 0 ? this.viviendaRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const vivienda = await this.findOne(id);
    if (vivienda) {
      await this.viviendaRepository.remove(vivienda);
      return vivienda;
    }
    return null;
  }
}
