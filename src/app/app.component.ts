import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(
    public mediaObserver: MediaObserver
  ){
    mediaObserver.media$.subscribe((mediaChange: MediaChange)=> {
      console.log('media$',mediaChange.mqAlias);
    })

    mediaObserver.asObservable().subscribe((media : MediaChange[]) => {
      console.log('asObservable', media);
    });
  }

}
