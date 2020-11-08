import { distance } from 'mathjs';
import { MovieRef, User } from '../common/interfaces';

// const k = 10;

export function predict(user: User, users: User[]): MovieRef {
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
