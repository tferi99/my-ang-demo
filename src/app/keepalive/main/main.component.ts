import { Component, OnInit } from '@angular/core';
import {Keepalive} from '@ng-idle/keepalive';
import {DEFAULT_INTERRUPTSOURCES, Idle} from '@ng-idle/core';

@Component({
  selector: 'keep-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = undefined;
  idleTime = 3;
  idleTimeout = 5;

  constructor(private idle: Idle, private keepalive: Keepalive) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(this.idleTime);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(this.idleTimeout);

    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.changeIdleState('No longer idle.'));
    idle.onTimeout.subscribe(() => {
      this.changeIdleState('Timed out!');
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.changeIdleState('You\'ve gone idle!'));
    idle.onTimeoutWarning.subscribe((countdown) => this.changeIdleState('You will time out in ' + countdown + ' seconds!'));

    // sets the ping interval to 15 seconds
    keepalive.interval(1);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  changeIdleState(msg: string) {
    console.log('>>>> ' + msg);
    this.idleState = msg;
  }

  reset() {
    this.idle.watch();
    this.changeIdleState('Started.');
    this.timedOut = false;
  }

  ngOnInit(): void {
  }
}

