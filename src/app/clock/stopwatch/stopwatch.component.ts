import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  stopwatchInterval!: ReturnType<typeof setTimeout>;
  milliseconds = 0;
  isRunning = false;

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  startStopwatch() {
    if (this.isRunning === false) {
      this.stopwatchInterval = setInterval(() => {
        this.milliseconds += 10;
      }, 10);
      this.isRunning = true;
    } else return;
  }

  pauseStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.isRunning = false;
  }

  getStopwatchTime() {
    const milliseconds = Math.floor((this.milliseconds / 10) % 100);
    const seconds = Math.floor(this.milliseconds / 1000) % 60;
    const minutes = Math.floor(this.milliseconds / 60000) % 60;
    const hours = Math.floor(this.milliseconds / 3600000);

    return { milliseconds, seconds, minutes, hours };
  }
}
