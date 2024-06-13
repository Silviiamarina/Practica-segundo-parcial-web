export class UpdateConceptoDto {
    private constructor(
        public readonly id: number,
        public readonly concepto?: string,
        public readonly detalle?: string,
        public readonly estado?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateConceptoDto?] {
        const { id, concepto, detalle, estado } = props;

        if (!id) return ['ID de Concepto es requerido', undefined];

        return [undefined, new UpdateConceptoDto(id, concepto, detalle, estado)];
    }
}
