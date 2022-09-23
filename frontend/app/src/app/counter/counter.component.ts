import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment } from '@/stores/actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<{ count: number }>) {}

  ngOnInit(): void {}

  public increment() {
    this.store.dispatch(new Increment());
  }
}
