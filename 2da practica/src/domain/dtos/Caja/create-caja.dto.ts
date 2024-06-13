export class CreateCajaDto {
    private constructor(
        public readonly id: number,
        public readonly description: string,
        public readonly estado: string = "Activo",
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateCajaDto?] {
        const { description, estado } = props;

        if (!description) return ['Description property is required', undefined];
        if (estado === undefined) return ['Estado property is required', undefined];

        return [undefined, new CreateCajaDto(description, estado)];
    }
}
