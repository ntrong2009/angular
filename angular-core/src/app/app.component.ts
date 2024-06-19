import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-core';

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/script.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }
}
