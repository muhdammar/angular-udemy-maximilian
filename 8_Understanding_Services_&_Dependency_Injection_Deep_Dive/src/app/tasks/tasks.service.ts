import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

//more better way
//this injector more optimized for tree-shaking
// @Injectable({
//     providedIn: 'root' // This makes the service available throughout the application
// })
export class TasksService{
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
        ...taskData,
         id: Math.random().toString(),
        status: 'OPEN'
    }
    this.tasks.update(oldTasks => [
      ...oldTasks,
      newTask
    ]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update(oldTasks => {
      const taskIndex = oldTasks.findIndex(task => task.id === taskId);
      if (taskIndex === -1) return oldTasks; // Task not found, return unchanged array
      const updatedTask = { ...oldTasks[taskIndex], status: newStatus };
      const updatedTasks = [...oldTasks];
      updatedTasks[taskIndex] = updatedTask;
      return updatedTasks;
    });
  }
}