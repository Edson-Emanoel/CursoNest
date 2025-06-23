import { Task } from './entities/task.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAllTasks() {
    return this.tasks;
  }

  findOneTask(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));

    if (task) return task;

    throw new NotFoundException('Tarefa não encontrada');
  }

  createTask(body: any) {
    const newId = this.tasks.length + 1;

    const newTask: Task = {
      id: newId,
      ...body,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, body: any) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    const taskItem = this.tasks[taskIndex];

    this.tasks[taskIndex] = {
      ...taskItem,
      ...body,
    };

    return 'Tarefa atualizada com sucesso';
  }

  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    this.tasks.splice(taskIndex, 1);

    return {
      message: 'Tarefa excluída com sucesso',
    };
  }
}
