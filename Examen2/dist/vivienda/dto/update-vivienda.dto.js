"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViviendaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vivienda_dto_1 = require("./create-vivienda.dto");
class UpdateViviendaDto extends (0, mapped_types_1.PartialType)(create_vivienda_dto_1.CreateViviendaDto) {
}
exports.UpdateViviendaDto = UpdateViviendaDto;
//# sourceMappingURL=update-vivienda.dto.js.map