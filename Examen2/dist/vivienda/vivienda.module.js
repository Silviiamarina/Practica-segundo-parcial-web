"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViviendaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vivienda_service_1 = require("./vivienda.service");
const vivienda_controller_1 = require("./vivienda.controller");
const vivienda_entity_1 = require("./entities/vivienda.entity");
let ViviendaModule = class ViviendaModule {
};
exports.ViviendaModule = ViviendaModule;
exports.ViviendaModule = ViviendaModule = __decorate([
    (0, common_1.Module)({
        controllers: [vivienda_controller_1.ViviendaController],
        providers: [vivienda_service_1.ViviendaService],
        imports: [typeorm_1.TypeOrmModule.forFeature([vivienda_entity_1.Vivienda])],
        exports: [typeorm_1.TypeOrmModule],
    })
], ViviendaModule);
//# sourceMappingURL=vivienda.module.js.map