export class CreateConceptoDto {
  private constructor(
      public readonly id: number,
      public readonly concepto: string,
      public readonly detalle: string,
      public readonly estado: string = "Activo",
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateConceptoDto?] {
      const { concepto, detalle, estado } = props;

      if (!concepto) return ['Concepto property is required', undefined];
      if (!detalle) return ['Detalle property is required', undefined];
      if (estado === undefined) return ['Estado property is required', undefined];

      return [undefined, new CreateConceptoDto(concepto, detalle, estado)];
  }
}
