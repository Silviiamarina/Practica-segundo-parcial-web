import { Injectable } from '@nestjs/common';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { Transaccion } from './entities/transaccion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionRepository: Repository<Transaccion>,
  ) {}


  async create(createTransaccionDto: CreateTransaccionDto) {
    const transaccion = this.transaccionRepository.create({
      ...createTransaccionDto,
      caja: { id: createTransaccionDto.idCaja },
      concepto: { id: createTransaccionDto.idConcepto },
    }
    );
    await this.transaccionRepository.save(transaccion);
    return  transaccion;
  }

  async findAll() {
    return await this.transaccionRepository.find();
  }

  async findOne(id: string) {
    return await this.transaccionRepository.findOneBy({ id } );
  }

  async update(id: string, updateTransaccionDto: UpdateTransaccionDto) {
    const updated = await this.transaccionRepository.update(id, updateTransaccionDto);
    return updated.affected > 0 ? this.transaccionRepository.findOneBy({ id }) : null;
  }

  async remove(id: string) {
    const transaccion = await this.transaccionRepository.findOne({ where: { id } });
    if  (transaccion) {
      transaccion.estado = 'inactivo';
      return this.transaccionRepository.save(transaccion);
    }
    return null;
  }
}
