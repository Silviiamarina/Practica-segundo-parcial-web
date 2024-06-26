import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Transaccion } from 'src/transaccion/entities/transaccion.entity';

@ObjectType()
@Entity({ name: 'cajas' })
export class Caja {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  descripcion?: string;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Transaccion,
    (transaccion) => transaccion.caja,
    { cascade: true }
  )
  @Field(() => [Transaccion], { nullable: true })
  transacciones?: Transaccion[];
}
