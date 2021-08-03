import { ComponentStore } from '@ngrx/component-store';
import { Component, OnInit } from '@angular/core';
import { Movie, MoviesStore } from './movies.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [ComponentStore]
})
export class MovieComponent {
  readonly userPreferredMovies$ = this.movieStore.userPreferredMovies$;

  constructor(
    private readonly movieStore: MoviesStore
  ) { }

  addMovie() {
    this.movieStore.addMovie({ id: '3', name: 'movie 3' });
  }
}
