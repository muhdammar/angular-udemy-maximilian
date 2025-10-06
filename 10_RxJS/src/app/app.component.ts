import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs'
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  //convert to observable
  clickCount$ = toObservable(this.clickCount); //here or constructor also can

  interval$ = interval(1000);

  //no need to unsubscribe the observable because signal handles it
  //manualCleanup: true to cleanup when component destroyed manually, false by default (automatically when component destroyed)
  intervalSignal = toSignal(this.interval$, {initialValue: 0, manualCleanup: true});
  //interval = signal(0);
  //doubleInterval = computed(() => this.interval() * 2);
  private destroyRef = inject(DestroyRef)
  constructor(){
    // effect(() => {
    //   //to detect any changes in signal
    //   console.log(`Clicked button ${this.clickCount()} times`)
    // })

    //convert to observable
    //toObservable(this.clickCount)
  }
  ngOnInit(): void {
    setInterval(() => {
      // this.interval.update((prev) => prev + 1);
    }, 1000);
    // const subscription = interval(1000).pipe(
    //   map((val) => val + 1),
    //   //can add another operator here
    // ).subscribe({
    //   next: (val) => console.log('Interval tick:', val)
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log('Click count:', val)
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onClick(){
    this.clickCount.update((prev) => prev + 1);
  }
}
