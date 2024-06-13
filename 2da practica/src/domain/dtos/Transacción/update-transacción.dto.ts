export class UpdateTransaccionDto {
    private constructor(
        public readonly id: number,
        public readonly id_Caja?: number,
        public readonly id_Concepto?: number,
        public readonly fecha?: Date,
        public readonly ingreso?: string,
        public readonly egreso?: string,
        public readonly observacion?: string,
        public readonly transaccion?: boolean,
        public readonly estado?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateTransaccionDto?] {
        const { id, id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = props;

        if (!id) return ['ID de Transacción es requerido', undefined];

        return [undefined, new UpdateTransaccionDto(id, id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado)];
    }
}
