import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsDateString, IsInt } from 'class-validator';

@InputType()
export class CreateTransaccionInput {
  @Field(() => String)
  @IsDateString()
  fecha: string;

  @Field(() => ID)
  @IsInt()
  cajaId: number;

  @Field(() => ID)
  @IsInt()
  conceptoId: number;

  @Field(() => String)
  @IsString()
  ingreso: string;

  @Field(() => String)
  @IsString()
  egreso: string;

  @Field(() => String)
  @IsString()
  observacion: string;

  @Field(() => String)
  transaccion: string;

  @Field(() => String, { nullable: true })
  @IsString()
  estado?: string = 'activo';
}
