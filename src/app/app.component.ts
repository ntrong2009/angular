import { Component } from '@angular/core';
import { TimerService } from './services/Operators/Creation/timer.service';
import { FilterService } from './services/Operators/Filtering/filter.service';
import { TakeUntileService } from './services/Operators/Filtering/takeIntil.service';
import { SubjectService } from './services/Subjects/Subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private timer: TimerService,
    private takeUntile: TakeUntileService,
    private filter: FilterService,
    private subject: SubjectService
  ){
    this.FilteringRun();
    this.SubjectRun();
  }

  CreationRun() {
    this.timer.timerEmits_1_valueThenCompletes();
    this.timer.timerEmitsAfter_5_SecondThenEvery_2_Seconds();
  }

  FilteringRun() {
    // this.takeUntile.takeValuesUntilTimerEmits();

    // this.filter.filterForEventNumber();
    // this.filter.filterObjectBasedOnProperty();
    // this.filter.filterForNumberGreaterThanSpecifiedValue();
  }

  SubjectRun() {
    this.subject.simpleSubject();
  }
}
