import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAllTasks() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async findOneTask(id: number) {
    try {
      const task = await this.prisma.task.findUnique({
        where: {
          id: id,
        }
      })
  
      if(task?.name) return task
      throw new NotFoundException('Tarefa não encontrada');
    } catch (err) {
      throw new HttpException('Falha ao buscar tarefa', HttpStatus.BAD_REQUEST);
    }
  }

  async createTask(createTaskDto: CreateTaskDto) {
    try {
      const newTask = await this.prisma.task.create({
        data: createTaskDto,
      })
  
      return newTask;
    } catch (err) {
      throw new HttpException('Falha ao criar tarefa', HttpStatus.BAD_REQUEST);
    }
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: id,
        }
      })
  
      if(!findTask) throw new NotFoundException('Tarefa não existe');
  
      const task = await this.prisma.task.update({
        where: {
          id: findTask.id,
        },
  
        data: updateTaskDto,
      })
  
      return task;
    } catch (err) {
      throw new HttpException('Falha ao atualizar tarefa', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteTask(id: number) {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: Number(id)
        }
      })
  
      if(!findTask) throw new NotFoundException('Tarefa não existe');
  
      await this.prisma.task.delete({
        where: {
          id: findTask.id
        }
      })
  
      return {
        message: 'Tarefa excluída com sucesso'
      }
    } catch (err) {
      throw new HttpException('Falha ao deletar tarefa', HttpStatus.BAD_REQUEST);
    }
  }
}
