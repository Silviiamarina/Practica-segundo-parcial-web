import { ViviendaService } from './vivienda.service';
import { CreateViviendaDto } from './dto/create-vivienda.dto';
import { UpdateViviendaDto } from './dto/update-vivienda.dto';
export declare class ViviendaController {
    private readonly viviendaService;
    constructor(viviendaService: ViviendaService);
    create(createViviendaDto: CreateViviendaDto): Promise<import("./entities/vivienda.entity").Vivienda>;
    findAll(): Promise<import("./entities/vivienda.entity").Vivienda[]>;
    findOne(id: number): Promise<import("./entities/vivienda.entity").Vivienda>;
    update(id: number, updateViviendaDto: UpdateViviendaDto): Promise<import("./entities/vivienda.entity").Vivienda>;
    remove(id: number): Promise<import("./entities/vivienda.entity").Vivienda>;
}
