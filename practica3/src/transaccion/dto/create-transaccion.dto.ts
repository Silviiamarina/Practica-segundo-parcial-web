import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateTransaccionDto {
    @IsString()
    @IsOptional()
    id: string;
    
    @IsInt()
    @IsNotEmpty()
    idCaja: number;

    @IsInt()
    @IsNotEmpty()
    idConcepto: number;



    @IsDateString()
    fecha: Date;

    @IsString()
    ingreso: string;

    @IsString()
    egreso: string;

    @IsString()
    observacion: string;

    @IsBoolean()
    @IsOptional() 
    transaccion: boolean= false;

    @IsString()
    estado: string="activo";
}
