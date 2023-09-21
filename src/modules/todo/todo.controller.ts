import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoDto } from './dto';
import { ITodo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

@Controller()
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Post('api/todos')
  async create(@Body() dto: TodoDto) {
    return this.todoService.save(dto);
  }

  @Get('api/todos')
  async getAll(): Promise<ITodo[]> {
    return this.todoService.findAll();
  }

  @Get('api/todos/:id')
  async getOne(@Param('id') id): Promise<ITodo> {
    return this.todoService.findONE(id);
  }

  @Put('api/todos/:id')
  async updateOne(@Param('id') id, @Body() dto: TodoDto) {
    return this.todoService.editOne(id, dto);
  }

  @Delete('api/todos/:id')
  async deleteOne(@Param('id') id) {
    return this.todoService.removeOne(id);
  }
}
