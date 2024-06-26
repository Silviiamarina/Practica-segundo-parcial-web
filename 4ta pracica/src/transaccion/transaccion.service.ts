import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransaccionInput } from './dto/create-transaccion.input';
import { UpdateTransaccionInput } from './dto/update-transaccion.input';
import { Repository } from 'typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionRepository: Repository<Transaccion>,
  ) { }

  async create(createTransaccionInput: CreateTransaccionInput): Promise<Transaccion> {
    const newTransaccion = this.transaccionRepository.create(createTransaccionInput);
    return await this.transaccionRepository.save(newTransaccion);
  }

  async findAll(estado: string): Promise<Transaccion[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.transaccionRepository.find({ where: { estado } });
    }
    return await this.transaccionRepository.find();
  }

  async findOne(id: number): Promise<Transaccion> {
    const transaccion = await this.transaccionRepository.findOneBy({ id });
    if (!transaccion) throw new NotFoundException('Transaccion not found');
    return transaccion;
  }

  async update(id: number, updateTransaccionInput: UpdateTransaccionInput): Promise<Transaccion> {
    const transaccion = await this.transaccionRepository.preload({
      id: id,
      ...updateTransaccionInput,
    });

    if (!transaccion) throw new NotFoundException(`Transaccion with id: ${id} not found`);

    return this.transaccionRepository.save(transaccion);
  }

  async remove(id: number): Promise<Transaccion> {
    const transaccion = await this.transaccionRepository.findOneBy({ id });
    if (transaccion) {
      transaccion.estado = 'inactivo';
      return this.transaccionRepository.save(transaccion);
    }
    return null;
  }
}
