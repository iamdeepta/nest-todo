import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITodo } from '../todo/interfaces/todo.interface';
import { TodoDto } from './dto';

@Injectable()
export class TodoService {
  constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<ITodo>) {}

  async save(dto: TodoDto): Promise<ITodo> {
    const newTodo = this.todoModel.create(dto);

    if (!newTodo) {
      throw new Error('Something went wrong');
    }

    return newTodo;
  }

  async findAll(): Promise<ITodo[]> {
    const todos = this.todoModel.find();

    if (!todos) {
      throw new Error('Something went wrong');
    }

    return todos;
  }

  async findONE(id: string): Promise<ITodo> {
    const todo = this.todoModel.findOne({ _id: id });

    if (!todo) {
      throw new Error('Something went wrong');
    }

    return todo;
  }

  async editOne(id: string, dto: TodoDto) {
    const todo = this.todoModel.updateOne({ _id: id }, { ...dto });

    if (!todo) {
      throw new Error('Something went wrong');
    }

    return todo;
  }

  async removeOne(id: string) {
    const todo = this.todoModel.deleteOne({ _id: id });

    if (!todo) {
      throw new Error('Something went wrong');
    }

    return todo;
  }
}
