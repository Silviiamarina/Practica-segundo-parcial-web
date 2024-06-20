import { IsOptional, IsString, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateConceptoDto {
    @PrimaryGeneratedColumn()
    id: number;
    
    @IsString()
    @MinLength(3)
    concepto: string;

    @IsString()
    @MinLength(3)
    detalle: string;

    @IsString()
    estado: string="activo";
}
