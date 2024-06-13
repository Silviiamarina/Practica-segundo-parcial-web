import { CreateConceptoDto, ConceptoDatasource, ConceptoEntity, ConceptoRepository, UpdateConceptoDto } from '../../domain';

export class ConceptoRepositoryImpl implements ConceptoRepository {

  constructor(
    private readonly datasource: ConceptoDatasource,
  ) { }

  create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
    return this.datasource.create(createConceptoDto);
  }

  getAll(): Promise<ConceptoEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<ConceptoEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
    return this.datasource.updateById(updateConceptoDto);
  }

  deleteById(id: number): Promise<ConceptoEntity> {
    return this.datasource.deleteById(id);
  }
}
