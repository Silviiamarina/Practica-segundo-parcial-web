import { CreateCajaDto, UpdateCajaDto } from "../dtos";
import { CajaEntity } from "../entities/Caja.entity";

export abstract class CajaRepository {
    abstract create(createCajaDto: CreateCajaDto): Promise<CajaEntity>;
    abstract getAll(): Promise<CajaEntity[]>;
    abstract findById(id: number): Promise<CajaEntity>;
    abstract updateById(updateCajaDto: UpdateCajaDto): Promise<CajaEntity>;
    abstract deleteById(id: number): Promise<CajaEntity>;
}
