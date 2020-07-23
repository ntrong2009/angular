import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  loading: Observable<boolean>;
  heroes: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
  ) {
    this.heroes = heroService.entities$;
    this.loading = heroService.loading$;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getByKey('group');
  }

}
