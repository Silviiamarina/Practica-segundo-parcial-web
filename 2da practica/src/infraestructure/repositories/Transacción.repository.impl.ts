import { CreateTransaccionDto, TransaccionDatasource, TransaccionEntity, TransaccionRepository, UpdateTransaccionDto } from '../../domain';

export class TransaccionRepositoryImpl implements TransaccionRepository {

  constructor(
    private readonly datasource: TransaccionDatasource,
  ) { }

  create(createTransaccionDto: CreateTransaccionDto): Promise<TransaccionEntity> {
    return this.datasource.create(createTransaccionDto);
  }

  getAll(): Promise<TransaccionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<TransaccionEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateTransaccionDto: UpdateTransaccionDto): Promise<TransaccionEntity> {
    return this.datasource.updateById(updateTransaccionDto);
  }

  deleteById(id: number): Promise<TransaccionEntity> {
    return this.datasource.deleteById(id);
  }
}
