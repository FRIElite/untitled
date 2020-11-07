export interface User {
    username: string;
    ratedMovies: Movie[];
}

export interface Movie {
    title: string;
    userRating: number;
    genres: string[];
    imgUrl: string;
}
