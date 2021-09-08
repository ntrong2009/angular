import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  param = { value: 'world' };

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    // console.log('%c%s', 'color: #735656', 'getDefaultLang', this.translate.getDefaultLang());
    this.translate.setTranslation('jp', { HELLO: 'HELLO1' }, false);
    this.translate.use('jp');

    this.translate.addLangs([...this.translate.getLangs(), 'new-lang']);

   //  console.log('%c%s', 'color: #99adcc', 'getLangs', this.translate.getLangs());

  }

  ngOnInit() {
    // this.translate.getTranslation('en').subscribe(val => {
    //   console.log('%c%s', 'color: #ffcc00', 'getTranslation', val);
    // });

    this.translate.get('HELLO').subscribe(val => {
      console.log('%c%s', 'color: #f279ca', 'get', val);
    });
  }
}
