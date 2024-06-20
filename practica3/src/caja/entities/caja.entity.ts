import { Transaccion } from "src/transaccion/entities/transaccion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("caja")
export class Caja {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column("text")
  descripcion: string;

  @Column("text", { default: 'activo' })
  estado: string;

  //RELACIONES
  @OneToMany(
    () => Transaccion,
    transaccion => transaccion.caja,
    {cascade: true}
  )
  transacciones: Transaccion[];
}
