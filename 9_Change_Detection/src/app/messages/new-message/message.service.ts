import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  //RxJS variables name
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = []
  get allMessages() {
    return [...this.messages]
  }


  addMessage(message: string) {
    this.messages = [...this.messages, message];
    // Emit the new messages array
    // use spread for immutability
    this.messages$.next([...this.messages]);
  }
}