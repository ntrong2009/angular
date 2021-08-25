import { ComponentStore } from '@ngrx/component-store';
import { Component, OnInit } from '@angular/core';
import { Movie, MoviesStore } from './movies.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MoviesStore]
})
export class MovieComponent {
  readonly userPreferredMovies$ = this.movieStore.userPreferredMovies$;
  movies$ = this.movieStore.movies$;

  constructor(
    private readonly movieStore: MoviesStore
  ) {
    this.movieStore.getMovie('1');
    this.movies$.subscribe(movies => {
      console.log('%c%s', 'color: #1d3f73', 'movies', movies);
    });
  }

  addMovie() {
    this.movieStore.updaterMovie({ id: '3', name: 'movie 3' });
  }
}
