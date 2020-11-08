import { distance } from 'mathjs';
import { Movie, MovieRef, User } from '../common/interfaces';
import { getGenreById } from '../front-end/src/utils/utils';
// const k = 10;

export function predict(user: User, users: User[]): MovieRef | null {
    if (!user.ratedMovies || user.ratedMovies.length == 0) {
        return null;
    }
    const userRatedMoviesIds = user.ratedMovies.filter((e) => e).map((e) => e._id!.toHexString());
    const userRecommendedMoviesIds = user.unratedMovies.filter((e) => e).map((e) => e._id!.toHexString());
    const userVec = user.ratedMovies.filter((e) => e).map((e) => e.userRating);
    const n = userVec.length;

    const movieRatings = users
        .filter((u) => u.username !== user.username)
        .map((tmpUser) => {
            const tmpUserRatedMoviesIds = tmpUser.ratedMovies.filter((e) => e).map((e) => e._id!.toHexString());
            const tmpUserVec = tmpUser.ratedMovies.filter((e) => e).map((e) => e.userRating);
            const tmpVec: number[] = Array(n).fill(0);
            for (let i = 0; i < n; i++) {
                if (tmpUserRatedMoviesIds.includes(userRatedMoviesIds[i])) {
                    tmpVec[i] = tmpUserVec[tmpUserRatedMoviesIds.indexOf(userRatedMoviesIds[i])];
                }
            }
            return { ratedMovies: tmpUser.ratedMovies, vec: tmpVec } as MovieVec;
        });

    const sorted = movieRatings.sort((a: MovieVec, b: MovieVec) => distance(a.vec, userVec) as number);
    return sorted[0].ratedMovies
        .filter(
            (m) =>
                m &&
                !userRatedMoviesIds.includes(m._id!.toHexString()) &&
                !userRecommendedMoviesIds.includes(m._id!.toHexString())
        )
        .sort((a, b) => b.userRating - a.userRating)[0];
}

interface MovieVec {
    ratedMovies: MovieRef[];
    vec: number[];
}

interface GenreProb {
    genre: string;
    p: number;
}

export function getFavouriteGenres(ratedMovies: Movie[], ratedMovieRef: MovieRef[]): GenreProb[] {
    const tmp: GenreProb[] = [];
    for (let i = 0; i < ratedMovies.length; i++) {
        if (ratedMovies[i]) {
            for (let genre of ratedMovies[i].genre_ids) {
                tmp.push({ genre: getGenreById(genre) || '', p: ratedMovieRef[i].userRating / 10 });
            }
        }
    }
    const differentGenres = new Set(tmp.map((e) => e.genre));
    const out: GenreProb[] = [];
    differentGenres.forEach((e) => {
        const filtered = tmp.filter((gp) => gp.genre === e);
        out.push({ genre: e, p: filtered.map((e) => e.p).reduce((a, b) => a + b) / filtered.length });
    });
    return out;
}
