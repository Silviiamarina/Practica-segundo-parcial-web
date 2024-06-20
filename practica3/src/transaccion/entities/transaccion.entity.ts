import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Caja } from 'src/caja/entities/caja.entity'; // Asegúrate de importar correctamente la entidad Caja
import { Concepto } from 'src/concepto/entities/concepto.entity'; // Asegúrate de importar correctamente la entidad Concepto

@Entity()
export class Transaccion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  fecha: Date;

  @Column('text')
  ingreso: string;

  @Column('text')
  egreso: string;

  @Column('text')
  observacion: string;

  @Column('boolean', { default: false })
  transaccion: boolean;

  @Column('text', { default: 'activo' })
  estado: string;

  // RELACIONES
  @ManyToOne(() => Caja, caja => caja.transacciones, { eager: true })
  caja?: Caja;

  @ManyToOne(() => Concepto, concepto => concepto.transacciones, { eager: true })
  concepto?: Concepto;
}
