"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViviendaController = void 0;
const common_1 = require("@nestjs/common");
const vivienda_service_1 = require("./vivienda.service");
const create_vivienda_dto_1 = require("./dto/create-vivienda.dto");
const update_vivienda_dto_1 = require("./dto/update-vivienda.dto");
let ViviendaController = class ViviendaController {
    constructor(viviendaService) {
        this.viviendaService = viviendaService;
    }
    create(createViviendaDto) {
        return this.viviendaService.create(createViviendaDto);
    }
    findAll() {
        return this.viviendaService.findAll();
    }
    findOne(id) {
        return this.viviendaService.findOne(id);
    }
    update(id, updateViviendaDto) {
        return this.viviendaService.update(id, updateViviendaDto);
    }
    remove(id) {
        return this.viviendaService.remove(id);
    }
};
exports.ViviendaController = ViviendaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vivienda_dto_1.CreateViviendaDto]),
    __metadata("design:returntype", void 0)
], ViviendaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViviendaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ViviendaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_vivienda_dto_1.UpdateViviendaDto]),
    __metadata("design:returntype", void 0)
], ViviendaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ViviendaController.prototype, "remove", null);
exports.ViviendaController = ViviendaController = __decorate([
    (0, common_1.Controller)('vivienda'),
    __metadata("design:paramtypes", [vivienda_service_1.ViviendaService])
], ViviendaController);
//# sourceMappingURL=vivienda.controller.js.map