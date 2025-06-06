import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  
  constructor() { 
    effect(() => {
      // This effect will run whenever currentStatus changes
      console.log(`Server status changed to: ${this.currentStatus()}`);
    });
  }
  currentStatus = signal<'online' | 'offline' | 'unknown'>("offline"); // Using signal to track the current status
  
  private interval?: ReturnType<typeof setInterval>;
  // private destroyRef = inject(DestroyRef); //angular v16+ way to handle component destruction
  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.currentStatus.set('online');
      } else if (rnd > 0.2) { // Simulating a server that is online
        this.currentStatus.set('offline') // Simulating a server that is under maintenance
      }
      else {
        this.currentStatus.set('unknown'); // Simulating a server that is offline
      }
    }, 5000);

  // Alternative way to handle component destruction in Angular v16+
    // const intervalDestroyRef = setInterval(() => {
    //   const rnd = Math.random();
    //   if (rnd > 0.5) {
    //     this.currentStatus.set('online');
    //   } else if (rnd > 0.2) { // Simulating a server that is online
    //     this.currentStatus.set('offline'); // Simulating a server that is under maintenance
    //   }
    //   else {
    //     this.currentStatus.set('unknown'); // Simulating a server that is offline
    //   }
    // }, 5000);
    // this.destroyRef.onDestroy(() => {
    //   clearInterval(intervalDestroyRef);
    // });
  } 
  ngOnDestroy(): void {
    // Clear the interval to prevent memory leaks
    clearTimeout(this.interval);
  }

}
