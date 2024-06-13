export class ConceptoEntity {
    constructor(
        public id: number,
        public concepto: string,
        public detalle: string,
        public estado: string
    ) { }

    public static fromObject(object: { [key: string]: any }): ConceptoEntity {
        const { id, concepto, detalle, estado } = object;
        if (!id) throw 'ID es requerido';
        if (!concepto) throw 'Concepto es requerido';
        if (!detalle) throw 'Detalle es requerido';
        if (typeof estado !== 'string') throw 'Estado debe ser una cadena de texto';

        return new ConceptoEntity(id, concepto, detalle, estado);
    }
}
