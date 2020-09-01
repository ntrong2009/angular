import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.css']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getMyStyle(){
    const myStyle = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheight ? this.Cheight : '',
      'border-radius': this.circle ? '50%' : '',
    };
    return myStyle;
  }

}
