import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  // providers: [TasksService] //(ElementInjector) Registering the TasksService as a provider in this component
                            // This makes the TasksService available only within this component and its children.                       
                            // Isolated from the root injector, so it won't be available in other parts of the application.
                            // This is useful for creating component-specific services that do not need to be shared globally.
})
export class TasksComponent {}
