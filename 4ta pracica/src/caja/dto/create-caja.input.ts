import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateCajaInput {

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string = 'activo';
}
