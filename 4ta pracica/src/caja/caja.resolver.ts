import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CajasService } from './caja.service';
import { Caja } from './entities/caja.entity';
import { CreateCajaInput } from './dto/create-caja.input';
import { UpdateCajaInput } from './dto/update-caja.input';

@Resolver(() => Caja)
export class CajasResolver {
  constructor(private readonly cajasService: CajasService) {}

  @Mutation(() => Caja)
  async createCaja(@Args('createCajaInput') createCajaInput: CreateCajaInput): Promise<Caja> {
    return this.cajasService.create(createCajaInput);
  }

  @Query(() => [Caja], { name: 'cajas' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.cajasService.findAll(estado);
  }

  @Query(() => Caja, { name: 'caja' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Caja> {
    return this.cajasService.findOne(id);
  }

  @Mutation(() => Caja)
  updateCaja(@Args('updateCajaInput') updateCajaInput: UpdateCajaInput): Promise<Caja> {
    return this.cajasService.update(updateCajaInput.id, updateCajaInput);
  }

  @Mutation(() => Caja)
  removeCaja(@Args('id', { type: () => ID }) id: number): Promise<Caja> {
    return this.cajasService.remove(id);
  }
}
