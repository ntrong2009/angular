import { FinalizeService } from './services/Operators/utility/finalize.service';
import { Component } from '@angular/core';
import { StartWithService } from './services/Operators/Combination/startWith.service';
import { TimerService } from './services/Operators/Creation/timer.service';
import { FilterService } from './services/Operators/Filtering/filter.service';
import { TakeUntileService } from './services/Operators/Filtering/takeIntil.service';
import { ShareService } from './services/Operators/Multicasting/share.service';
import { SwitchMapService } from './services/Operators/Transformation/switchMap.service';
import { SubjectService } from './services/Subjects/Subject.service';
import { BehaviorSubjectDemo } from './services/BehaviorSubject/BehaviorSubject.service';
import { ReplaySubjectDemo } from './services/ReplaySubject/ReplaySubject.service';
import { AsyncSubjectDemo } from './services/AsyncSubject/AsyncSubject.service';

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
    private shareService: ShareService,
    private switchMapService: SwitchMapService,
    private subject: SubjectService,
    private startWithService: StartWithService,
    private finalizeService: FinalizeService,
    private behaviorSubjectDemo: BehaviorSubjectDemo,
    private relaySubjectDemo: ReplaySubjectDemo,
    private asyncSubjectDemo: AsyncSubjectDemo
  ) {
    this.CreationRun();
    this.CombinationRun();
    this.MulticastingRun();
    this.FilteringRun();
    this.TransformationRun();

    // this.finalizeService.emitWhenObserverComplete();
    // this.behaviorSubjectDemo.run();
    // this.relaySubjectDemo.run();
    this.asyncSubjectDemo.run();
  }

  //#region Operator

  CreationRun() {
    // this.timer.timerEmits_1_valueThenCompletes();
    // this.timer.timerEmitsAfter_5_SecondThenEvery_2_Seconds();
  }

  CombinationRun() {
    // this.startWithService.startWithOnNumberSequence();
    // this.startWithService.startWithMultipleValues();
  }

  FilteringRun() {
    // this.takeUntile.takeValuesUntilTimerEmits();

    // this.filter.filterForEventNumber();
    // this.filter.filterObjectBasedOnProperty();
    // this.filter.filterForNumberGreaterThanSpecifiedValue();
  }

  TransformationRun() {
    // this.switchMapService.restartIntervalOnEveryClick();
    // this.switchMapService.countDownTimerWithPauseAndResume();
  }

  MulticastingRun() {
    // this.shareService.share();
  }

  //#endregion

  SubjectRun() {
    // this.subject.simpleSubject();
  }
}
