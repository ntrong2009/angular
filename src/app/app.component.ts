import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  changeBg = false;

  constructor(
    public mediaObserver: MediaObserver
  ){
    mediaObserver.media$.subscribe((mediaChange: MediaChange) => {
      // console.log('media$', mediaChange.mqAlias);
    });

    mediaObserver.asObservable().subscribe((media: MediaChange[]) => {
      console.log('asObservable', media);
      if (media[media.length - 1].mqAlias === 'gt-xs'){
        console.log('desktop');
      } else {
        console.log('mobile');
      }
    });

    console.log(mediaObserver.isActive('gt-xs'));
  }

  changeBgColor(){
    this.changeBg = !this.changeBg;
  }
}
