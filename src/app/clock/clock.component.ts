import { Component, OnDestroy, NgZone } from '@angular/core';
import { CardModule } from 'primeng/card';
import { afterNextRender } from '@angular/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@Component({
  selector: 'app-clock',
  standalone: true,
  host: { class: 'host-component' },
  imports: [CardModule, StopwatchComponent],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnDestroy {
  constructor(ngZone: NgZone) {
    afterNextRender(() => {
      this.clock = setInterval(() => {
        ngZone.run(() => {
          this.dateFormat().fullDate = new Date();
        });
      }, 1000);
    });
  }

  private clock: any;
  dateFormat() {
    const fullDate = new Date();
    const dateLocale = fullDate.toLocaleDateString();
    const timeLocale = fullDate.toLocaleTimeString();
    return { fullDate, dateLocale, timeLocale };
  }

  ngOnDestroy(): void {
    clearInterval(this.clock);
  }
}
