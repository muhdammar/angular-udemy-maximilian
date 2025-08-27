import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map } from 'rxjs'
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef)
  ngOnInit(): void {
    const subscription = interval(1000).pipe(
      map((val) => val + 1),
      //can add another operator here
    ).subscribe({
      next: (val) => console.log('Interval tick:', val)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
