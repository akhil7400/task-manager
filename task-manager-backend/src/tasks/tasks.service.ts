import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // CREATE TASK
  async createTask(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  // GET ALL TASKS
  async getAllTasks() {
    return this.prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // GET SINGLE TASK
  async getTaskById(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  // UPDATE TASK
  async updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    await this.getTaskById(id);

    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  // DELETE TASK
  async deleteTask(id: string) {
    await this.getTaskById(id);

    return this.prisma.task.delete({
      where: { id },
    });
  }
}