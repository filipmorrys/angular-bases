import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  public counter: number = 10;

  constructor() { }

  ngOnInit() { }

  increaseBy() {
    this.counter++;
  }

  decreaseBy() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 10;
  }
}
