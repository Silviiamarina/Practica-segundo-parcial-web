
import { IsString, IsDateString, IsInt, isInt } from 'class-validator';


export class CreateTransaccionInput {

  @IsInt()
  id: number

  @IsDateString()
  fecha: string;


  @IsInt()
  cajaId: number;


  @IsInt()
  conceptoId: number;


  @IsString()
  ingreso: string;


  @IsString()
  egreso: string;


  @IsString()
  observacion: string;

  @IsString()
  transaccion: string;

}