export class UpdateCajaDto {
    private constructor(
        public readonly id: number,
        public readonly description?: string,
        public readonly estado?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateCajaDto?] {
        const { id, description, estado } = props;

        if (!id) return ['ID de Caja es requerido', undefined];

        return [undefined, new UpdateCajaDto(id, description, estado)];
    }
}
