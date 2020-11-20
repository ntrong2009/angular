import { Component } from '@angular/core';
import { Timer } from './services/Creation/timer.service';
import { Filter } from './services/Filtering/filter.service';
import { TakeUntile } from './services/Filtering/takeIntil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private timer: Timer,
    private takeUntile: TakeUntile,
    private filter: Filter,
  ){
    this.FilteringRun();
  }

  CreationRun() {
    this.timer.timerEmits_1_valueThenCompletes();
    this.timer.timerEmitsAfter_5_SecondThenEvery_2_Seconds();
  }

  FilteringRun() {
    // this.takeUntile.takeValuesUntilTimerEmits();

    // this.filter.filterForEventNumber();
    // this.filter.filterObjectBasedOnProperty();
    this.filter.filterForNumberGreaterThanSpecifiedValue();
  }
}
