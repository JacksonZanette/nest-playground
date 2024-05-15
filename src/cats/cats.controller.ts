import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { ListAllEntities } from './dtos/list-all-entities';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() : Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}