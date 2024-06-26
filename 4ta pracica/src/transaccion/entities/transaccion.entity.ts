import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Caja } from 'src/caja/entities/caja.entity';
import { Concepto } from 'src/concepto/entities/concepto.entity';

@ObjectType()
@Entity({ name: 'transacciones' })
export class Transaccion {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column('date')
  @Field(() => String)
  fecha: string;

  @Column('text')
  @Field(() => String)
  ingreso: string;

  @Column('text')
  @Field(() => String)
  egreso: string;

  @Column('text')
  @Field(() => String)
  observacion: string;

  @Column('text')
  @Field(() => String)
  transaccion: string;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @ManyToOne(
    () => Caja,
    (caja) => caja.transacciones,
    { eager: true }
  )
  @Field(() => Caja)
  caja: Caja;

  @ManyToOne(
    () => Concepto,
    (concepto) => concepto.transacciones,
    { eager: true }
  )
  @Field(() => Concepto)
  concepto: Concepto;
}
