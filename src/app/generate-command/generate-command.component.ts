// ng generate c _your_component -> to generate ur component via CLI
// ng g c tasks/task --skip-tests --> for inside folder and skip test
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-command',
  standalone: true,
  imports: [],
  templateUrl: './generate-command.component.html',
  styleUrl: './generate-command.component.css'
})
export class GenerateCommandComponent {

}
