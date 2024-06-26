import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ConceptosService } from './concepto.service';
import { Concepto } from './entities/concepto.entity';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';

@Resolver(() => Concepto)
export class ConceptosResolver {
  constructor(private readonly conceptosService: ConceptosService) {}

  @Mutation(() => Concepto)
  async createConcepto(@Args('createConceptoInput') createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    return this.conceptosService.create(createConceptoInput);
  }

  @Query(() => [Concepto], { name: 'conceptos' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.conceptosService.findAll(estado);
  }

  @Query(() => Concepto, { name: 'concepto' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Concepto> {
    return this.conceptosService.findOne(id);
  }

  @Mutation(() => Concepto)
  updateConcepto(@Args('updateConceptoInput') updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    return this.conceptosService.update(updateConceptoInput.id, updateConceptoInput);
  }

  @Mutation(() => Concepto)
  removeConcepto(@Args('id', { type: () => ID }) id: number): Promise<Concepto> {
    return this.conceptosService.remove(id);
  }
}
