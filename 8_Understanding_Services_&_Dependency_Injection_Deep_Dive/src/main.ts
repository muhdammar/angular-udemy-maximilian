import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

//it will be reference for study note
// bootstrapApplication(AppComponent, {
//     providers: [
//         // Registering the TasksService as a provider in root EnvironmentInjector
//         // this not enable tree-shaking, so the service will be included in the final bundle
//         // even if it is not used in the application.
//         // If you want to enable tree-shaking, you can use the `providedIn`
//       TasksService 
//     ]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));