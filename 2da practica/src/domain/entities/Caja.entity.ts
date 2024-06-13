export class CajaEntity {
    constructor(
        public id: number,
        public description: string,
        public estado: string
    ) { }

    public static fromObject(object: { [key: string]: any }): CajaEntity {
        const { id, description, estado } = object;
        if (!id) throw 'ID es requerido';
        if (!description) throw 'Description es requerido';
        if (typeof estado !== 'string') throw 'Estado debe ser una cadena de texto';

        return new CajaEntity(id, description, estado);
    }
}
