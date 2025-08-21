import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TaskServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, TaskStatusOptions, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [
    // { provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions } // one way to inject options value
    taskStatusOptionsProvider, // another way to inject options value
  ]
})
export class TasksListComponent {
  //another way to inject the service
  private tasksService = inject(TaskServiceToken);
  selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() =>{
    //angular will subscribe to this selectedFilter as computed property and 
    //re-evaluate it when dependencies change
    switch (this.selectedFilter()) {
      case 'all':
        return this.tasksService.allTasks();
      case 'open':
        return this.tasksService.allTasks().filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter(task => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  }) 

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
