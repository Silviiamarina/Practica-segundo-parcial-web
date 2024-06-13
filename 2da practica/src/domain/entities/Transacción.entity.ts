export class TransaccionEntity {
    constructor(
        public id: number,
        public id_Caja: number,
        public id_Concepto: number,
        public fecha: Date,
        public ingreso: string,
        public egreso: string,
        public observacion: string,
        public transaccion: boolean,
        public estado: string
    ) { }

    public static fromObject(object: { [key: string]: any }): TransaccionEntity {
        const { id, id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = object;
        if (!id) throw 'ID es requerido';
        if (id_Caja === undefined) throw 'ID_Caja es requerido';
        if (id_Concepto === undefined) throw 'ID_Concepto es requerido';
        if (!fecha) throw 'Fecha es requerido';
        if (!ingreso) throw 'Ingreso es requerido';
        if (!egreso) throw 'Egreso es requerido';
        if (!observacion) throw 'Observacion es requerido';
        if (transaccion === undefined) throw 'Transaccion es requerido';
        if (typeof estado !== 'string') throw 'Estado debe ser una cadena de texto';

        return new TransaccionEntity(id, id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado);
    }
}
