import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  // showShortDesciption = true;
  // alterDescriptionText() {
  //    this.showShortDesciption = !this.showShortDesciption
  // }

  title = 'angular';

  ngOnInit(){
    document.querySelector('.show-more-button').addEventListener('click', function() {
      // If text is shown less, then show complete
      if(this.getAttribute('data-more') == 0) {
        this.setAttribute('data-more', 1);
        this.innerHTML = 'Read Less';
        this.previousElementSibling.style.display = 'none';
        this.previousElementSibling.previousElementSibling.style.display = 'inline';
      }
      // If text is shown complete, then show less
      else if(this.getAttribute('data-more') == 1) {
        this.setAttribute('data-more', 0);
        this.innerHTML = 'Read More';
    
        this.previousElementSibling.style.display = 'inline';
        this.previousElementSibling.previousElementSibling.style.display = 'none';
      }	
    });
  }
}
