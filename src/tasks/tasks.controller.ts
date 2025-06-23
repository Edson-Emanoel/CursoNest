import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findOneTask(@Param('id') id: string) {
    return this.tasksService.findOneTask(id);
  }

  @Post('')
  createTask(@Body() body: any) {
    console.log(body);

    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
