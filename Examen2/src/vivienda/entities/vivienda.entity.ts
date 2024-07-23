import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vivienda' })
export class Vivienda {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    codigo: string;

    @Column('text')
    detalle: string;

    @Column('text')
    sector: string;

    @Column('text')
    tipo: string;

    @Column('decimal')
    valorAlquiler: number;

    @Column('date')
    fechaFinalizacionContrato: Date;

    @Column('text')
    empresa: string;

    // Puedes agregar campos adicionales aquí si es necesario
    @Column('text', { default: 'Activo' })
    estado: string;
}
