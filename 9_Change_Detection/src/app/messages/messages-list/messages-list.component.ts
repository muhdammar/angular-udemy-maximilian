import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../new-message/message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  private messagesService = inject(MessagesService);
  //trigger change detection manually
  private cdRef = inject(ChangeDetectorRef); //this provided by Angular
  private destroyRef = inject(DestroyRef);

  messages: string[] = []
  ngOnInit(): void {
    const subscription = this.messagesService.messages$.subscribe((messages) => {
      this.messages = messages;
      // Trigger change detection manually
      this.cdRef.markForCheck();
    });
    //good practice to unsuscribe if this component were removed
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
