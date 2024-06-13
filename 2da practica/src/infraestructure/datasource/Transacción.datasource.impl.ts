import { prisma } from '../../data/postgres';
import { CreateTransaccionDto, TransaccionDatasource, TransaccionEntity, UpdateTransaccionDto } from '../../domain';

export class TransaccionDatasourceImpl implements TransaccionDatasource {

  async create(createTransaccionDto: CreateTransaccionDto): Promise<TransaccionEntity> {
    const transaccion = await prisma.transaccion.create({
      data: createTransaccionDto
    });

    return TransaccionEntity.fromObject(transaccion);
  }

  async getAll(): Promise<TransaccionEntity[]> {
    const transacciones = await prisma.transaccion.findMany();
    return transacciones.map((transaccion: { [key: string]: any; }) => TransaccionEntity.fromObject(transaccion));
  }

  async findById(id: number): Promise<TransaccionEntity> {
    const transaccion = await prisma.transaccion.findFirst({
      where: { id }
    });

    if (!transaccion) throw `Transaccion with id ${id} not found`;
    return TransaccionEntity.fromObject(transaccion);
  }

  async updateById(updateTransaccionDto: UpdateTransaccionDto): Promise<TransaccionEntity> {
    await this.findById(updateTransaccionDto.id);

    const updatedTransaccion = await prisma.transaccion.update({
      where: { id: updateTransaccionDto.id },
      data: updateTransaccionDto
    });

    return TransaccionEntity.fromObject(updatedTransaccion);
  }

  async deleteById(id: number): Promise<TransaccionEntity> {
    await this.findById(id);
    const deleted = await prisma.transaccion.delete({
      where: { id }
    });

    return TransaccionEntity.fromObject(deleted);
  }

}
