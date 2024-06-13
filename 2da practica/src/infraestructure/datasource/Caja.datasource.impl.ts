import { prisma } from '../../data/postgres';
import { CreateCajaDto, CajaDatasource, CajaEntity, UpdateCajaDto } from '../../domain';

export class CajaDatasourceImpl implements CajaDatasource {

  async create(createCajaDto: CreateCajaDto): Promise<CajaEntity> {
    const caja = await prisma.caja.create({
      data: createCajaDto
    });

    return CajaEntity.fromObject(caja);
  }

  async getAll(): Promise<CajaEntity[]> {
    const cajas = await prisma.caja.findMany();
    return cajas.map((caja: { [key: string]: any; }) => CajaEntity.fromObject(caja));
  }

  async findById(id: number): Promise<CajaEntity> {
    const caja = await prisma.caja.findFirst({
      where: { id }
    });

    if (!caja) throw `Caja with id ${id} not found`;
    return CajaEntity.fromObject(caja);
  }

  async updateById(updateCajaDto: UpdateCajaDto): Promise<CajaEntity> {
    await this.findById(updateCajaDto.id);

    const updatedCaja = await prisma.caja.update({
      where: { id: updateCajaDto.id },
      data: updateCajaDto
    });

    return CajaEntity.fromObject(updatedCaja);
  }

  async deleteById(id: number): Promise<CajaEntity> {
    await this.findById(id);
    const deleted = await prisma.caja.delete({
      where: { id }
    });

    return CajaEntity.fromObject(deleted);
  }

}
