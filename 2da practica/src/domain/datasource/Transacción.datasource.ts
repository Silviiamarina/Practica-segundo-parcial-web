import { CreateTransaccionDto, UpdateTransaccionDto } from "../dtos";
import { TransaccionEntity } from "../entities/Transacción.entity";

export abstract class TransaccionDatasource {
    abstract create(createTransaccionDto: CreateTransaccionDto): Promise<TransaccionEntity>;
    abstract getAll(): Promise<TransaccionEntity[]>;
    abstract findById(id: number): Promise<TransaccionEntity>;
    abstract updateById(updateTransaccionDto: UpdateTransaccionDto): Promise<TransaccionEntity>;
    abstract deleteById(id: number): Promise<TransaccionEntity>;
}
