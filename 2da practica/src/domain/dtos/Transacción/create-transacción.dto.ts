export class CreateTransaccionDto {
    private constructor(
        public readonly id: number,
        public readonly id_Caja: number,
        public readonly id_Concepto: number,
        public readonly fecha: Date,
        public readonly ingreso: string,
        public readonly egreso: string,
        public readonly observacion: string,
        public readonly transaccion: boolean,
        public readonly estado: string = "Activo",
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateTransaccionDto?] {
        const { id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = props;

        if (id_Caja === undefined) return ['Id_Caja property is required', undefined];
        if (id_Concepto === undefined) return ['Id_Concepto property is required', undefined];
        if (!fecha) return ['Fecha property is required', undefined];
        if (!ingreso) return ['Ingreso property is required', undefined];
        if (!egreso) return ['Egreso property is required', undefined];
        if (!observacion) return ['Observacion property is required', undefined];
        if (transaccion === undefined) return ['Transaccion property is required', undefined];
        if (estado === undefined) return ['Estado property is required', undefined];

        return [undefined, new CreateTransaccionDto(id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado)];
    }
}
