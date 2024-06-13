import { prisma } from '../../data/postgres';
import { CreateConceptoDto, ConceptoDatasource, ConceptoEntity, UpdateConceptoDto } from '../../domain';

export class ConceptoDatasourceImpl implements ConceptoDatasource {

  async create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
    const concepto = await prisma.concepto.create({
      data: createConceptoDto
    });

    return ConceptoEntity.fromObject(concepto);
  }

  async getAll(): Promise<ConceptoEntity[]> {
    const conceptos = await prisma.concepto.findMany();
    return conceptos.map((concepto: { [key: string]: any; }) => ConceptoEntity.fromObject(concepto));
  }

  async findById(id: number): Promise<ConceptoEntity> {
    const concepto = await prisma.concepto.findFirst({
      where: { id }
    });

    if (!concepto) throw `Concepto with id ${id} not found`;
    return ConceptoEntity.fromObject(concepto);
  }

  async updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
    await this.findById(updateConceptoDto.id);

    const updatedConcepto = await prisma.concepto.update({
      where: { id: updateConceptoDto.id },
      data: updateConceptoDto
    });

    return ConceptoEntity.fromObject(updatedConcepto);
  }

  async deleteById(id: number): Promise<ConceptoEntity> {
    await this.findById(id);
    const deleted = await prisma.concepto.delete({
      where: { id }
    });

    return ConceptoEntity.fromObject(deleted);
  }

}
