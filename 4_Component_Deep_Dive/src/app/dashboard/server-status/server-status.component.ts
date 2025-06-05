import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
 
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.2) { // Simulating a server that is online
        this.currentStatus = 'offline'; // Simulating a server that is under maintenance
      }
      else {
        this.currentStatus = 'offline'; // Simulating a server that is offline
      }
    }, 5000);
  } 
}
