import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAllTasks() {
    return this.tasks;
  }

  findOneTask(id: string) {
    return this.tasks.find((task) => task.id === Number(id));
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

    if (taskIndex >= 0) {
      const taskItem = this.tasks[taskIndex];

      this.tasks[taskIndex] = {
        ...taskItem,
        ...body,
      };
    }

    return 'Tarefa atualizada com sucesso';
  }
}
