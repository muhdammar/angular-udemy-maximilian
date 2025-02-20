import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  // ? this question mark means this variable might
  // or not has been initialized or set
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;
  //if we use like this, it will create new instance everytime component create, data inconsistency will happen
  //then dependency inject comeout
  // private taskService = new TasksService();
  private taskService = new TasksService();

  //dependency injection in angular
  constructor(tasksService: TasksService){
    this.taskService = tasksService;
  }

  //another way using "private tasksService" as parameter so it will create the taskservice (typescript features)
  // constructor(private tasksService: TasksService){
  // }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
