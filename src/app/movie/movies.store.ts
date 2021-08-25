import { MovieService } from './movies.service';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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

    constructor(
        private movieService: MovieService
    ) {
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

    readonly getMovie = this.effect((movieId$: Observable<string>) => {
        return movieId$.pipe(
            switchMap((id) => this.movieService.fetchMovie().pipe(
                tap({
                    next: ({ movie }) => {
                        return this.updaterMovie(movie);
                    },
                    error: (e: HttpErrorResponse) => console.log(e)
                }),
                catchError(() => EMPTY)
            ))
        );
    });


    // ============ write
    readonly updaterMovie = this.updater((state: MoviesState, movie: Movie) => ({
        ...state,
        movies: [...state.movies, movie],
    }));

    readonly setStateMovie = this.setState({ movies: [], userPreferredMoviesIds: [] });
}
