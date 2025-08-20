import { Injectable } from '@angular/core';
//side note, if u inject register service using ElementInjector in other component providers array, it will show NullInjectorError
//because ElementInjector only works with component and directive
@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`LoggingService: ${timeStamp}:  ${message}`);

  }
  constructor() { }
}
