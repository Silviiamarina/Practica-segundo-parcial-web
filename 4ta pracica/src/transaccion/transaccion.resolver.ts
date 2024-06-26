import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TransaccionesService } from './transaccion.service';
import { Transaccion } from './entities/transaccion.entity';
import { CreateTransaccionInput } from './dto/create-transaccion.input';
import { UpdateTransaccionInput } from './dto/update-transaccion.input';

@Resolver(() => Transaccion)
export class TransaccionesResolver {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Mutation(() => Transaccion)
  async createTransaccion(@Args('createTransaccionInput') createTransaccionInput: CreateTransaccionInput): Promise<Transaccion> {
    return this.transaccionesService.create(createTransaccionInput);
  }

  @Query(() => [Transaccion], { name: 'transacciones' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.transaccionesService.findAll(estado);
  }

  @Query(() => Transaccion, { name: 'transaccion' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Transaccion> {
    return this.transaccionesService.findOne(id);
  }

  @Mutation(() => Transaccion)
  updateTransaccion(@Args('updateTransaccionInput') updateTransaccionInput: UpdateTransaccionInput): Promise<Transaccion> {
    return this.transaccionesService.update(updateTransaccionInput.id, updateTransaccionInput);
  }

  @Mutation(() => Transaccion)
  removeTransaccion(@Args('id', { type: () => ID }) id: number): Promise<Transaccion> {
    return this.transaccionesService.remove(id);
  }
}
