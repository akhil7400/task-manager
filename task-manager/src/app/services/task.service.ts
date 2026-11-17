import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private taskSignal = signal<Task[]>([]);
  tasks = this.taskSignal.asReadonly();
  totalTasks = computed(() => this.tasks().length);
  completedTasks = computed(
    () => this.tasks().filter((task) => task.status === 'Completed').length,
  );
  pendingTasks = computed(() => this.tasks().filter((task) => task.status !== 'Completed').length);
  addTask(task: Task) {
    this.taskSignal.update((tasks) => [...tasks, task]);
  }
  updateTask(updatedTask: Task) {
    this.taskSignal.update((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }

  deleteTask(id: number) {
    this.taskSignal.update((tasks) => this.tasks().filter((task) => task.id != id));
  }
}
