import { ObjectId } from 'mongodb';

export interface User {
    _id?: ObjectId;
    username: string;
    pasword: string;
    email: string;
    ratedMovies: MovieRef[];
    recommendedMovies: MovieRef[];
}

export interface MovieRef {
    id: ObjectId;
    userRating: number;
}

export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface Genre {
    id: number;
    name: string;
}
