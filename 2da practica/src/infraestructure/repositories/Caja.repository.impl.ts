import { CreateCajaDto, CajaDatasource, CajaEntity, CajaRepository, UpdateCajaDto } from '../../domain';

export class CajaRepositoryImpl implements CajaRepository {

  constructor(
    private readonly datasource: CajaDatasource,
  ) { }

  create(createCajaDto: CreateCajaDto): Promise<CajaEntity> {
    return this.datasource.create(createCajaDto);
  }

  getAll(): Promise<CajaEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CajaEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateCajaDto: UpdateCajaDto): Promise<CajaEntity> {
    return this.datasource.updateById(updateCajaDto);
  }

  deleteById(id: number): Promise<CajaEntity> {
    return this.datasource.deleteById(id);
  }
}
