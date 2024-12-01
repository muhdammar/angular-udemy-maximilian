import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent]
})
export class TasksComponent {
  // ? this question mark means this variable might
  // or not has been initialized or set
  @Input() name?: string;
}
