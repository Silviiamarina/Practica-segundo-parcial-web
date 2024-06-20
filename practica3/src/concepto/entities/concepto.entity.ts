import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaccion } from 'src/transaccion/entities/transaccion.entity'; // Asegúrate de importar correctamente la entidad Transaccion

@Entity('concepto')
export class Concepto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  concepto: string;

  @Column('text')
  detalle: string;

  @Column('text', { default: 'activo' })
  estado: string;

  // RELACIONES
  @OneToMany(() => Transaccion, transaccion => transaccion.concepto, { cascade: true })
  transacciones: Transaccion[];
}
