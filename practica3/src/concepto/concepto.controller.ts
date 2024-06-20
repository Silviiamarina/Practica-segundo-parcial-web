import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';

@Controller('concepto')
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Post()
  create(@Body() createConceptoDto: CreateConceptoDto) {
    return this.conceptoService.create(createConceptoDto);
  }

  @Get()
  findAll() {
    return this.conceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conceptoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateConceptoDto: UpdateConceptoDto) {
    return this.conceptoService.update(id, updateConceptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.conceptoService.remove(id);
  }
}
