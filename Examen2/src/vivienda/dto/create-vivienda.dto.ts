import { IsOptional, IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateViviendaDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @IsNotEmpty()
    detalle: string;

    @IsString()
    @IsNotEmpty()
    sector: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsNumber()
    @IsNotEmpty()
    valorAlquiler: number;

    @IsString()
    @IsNotEmpty()
    fechaFinalizacionContrato: String;

    @IsString()
    @IsNotEmpty()
    empresa: string;
}

