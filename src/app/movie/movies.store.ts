import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export class Movie {
    id: string;
    name: string;
}

export interface MoviesState {
    movies: Movie[];
    userPreferredMoviesIds: string[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
    readonly movies$: Observable<Movie[]> = this.select(state => state.movies);
    readonly userPreferredMoviesIds$: Observable<string[]> = this.select(state => state.userPreferredMoviesIds);

    readonly userPreferredMovies$ = this.select(
        this.movies$,
        this.userPreferredMoviesIds$,
        (movies, ids) => {
            return movies.filter(movie => ids.includes(movie.id));
        }
    );

    constructor() {
        super(
            {
                movies: [
                    { id: '1', name: 'movie 1' },
                    { id: '2', name: 'movie 2' }
                ],
                userPreferredMoviesIds: ['2', '3']
            }
        );
    }

    readonly addMovie = this.updater((state: MoviesState, movie: Movie) => ({
        ...state,
        movies: [...state.movies, movie],
    }));
}
