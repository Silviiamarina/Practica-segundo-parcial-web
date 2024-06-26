import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Transaccion } from 'src/transaccion/entities/transaccion.entity';

@ObjectType()
@Entity({ name: 'conceptos' })
export class Concepto {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  concepto?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  detalle?: string;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Transaccion,
    (transaccion) => transaccion.concepto,
    { cascade: true }
  )
  @Field(() => [Transaccion], { nullable: true })
  transacciones?: Transaccion[];
}
