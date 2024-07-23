import { CreateViviendaDto } from './dto/create-vivienda.dto';
import { UpdateViviendaDto } from './dto/update-vivienda.dto';
import { Repository } from 'typeorm';
import { Vivienda } from './entities/vivienda.entity';
export declare class ViviendaService {
    private readonly viviendaRepository;
    constructor(viviendaRepository: Repository<Vivienda>);
    create(createViviendaDto: CreateViviendaDto): Promise<Vivienda>;
    findAll(): Promise<Vivienda[]>;
    findOne(id: number): Promise<Vivienda>;
    update(id: number, updateViviendaDto: UpdateViviendaDto): Promise<Vivienda>;
    remove(id: number): Promise<Vivienda>;
}
