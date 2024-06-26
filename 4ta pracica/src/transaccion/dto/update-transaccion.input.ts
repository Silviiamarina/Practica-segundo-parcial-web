import { InputType, Field, ID } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateTransaccionInput {

  @Field(() => ID)
  @IsInt()
  id: number;
}
