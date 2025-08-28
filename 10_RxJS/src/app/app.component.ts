import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs'
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  private destroyRef = inject(DestroyRef)
  constructor(){
    effect(() => {
      //to detect any changes in signal
      console.log(`Clicked button ${this.clickCount()} times`)
    })
  }
  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val + 1),
    //   //can add another operator here
    // ).subscribe({
    //   next: (val) => console.log('Interval tick:', val)
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
  onClick(){
    this.clickCount.update((prev) => prev + 1);
  }
}
