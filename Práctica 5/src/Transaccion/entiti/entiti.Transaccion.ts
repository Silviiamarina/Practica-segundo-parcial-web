import { Column, Entity, PrimaryColumn, } from 'typeorm';

@Entity({ name: 'Transaccion' })
export class TransaccionEntiti {


      @PrimaryColumn()
      id: number

      @Column()
      fecha: string;


      @Column()
      cajaId: number;


      @Column()
      conceptoId: number;

      @Column()
      ingreso: string;

      @Column()
      egreso: string;

      @Column()
      observacion: string;

      @Column()
      transaccion: string;




}