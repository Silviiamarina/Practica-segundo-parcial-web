import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateCajaDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    estado: string="activo";
}
