import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateConceptoInput {

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  concepto?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  detalle?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = 'activo';
}
