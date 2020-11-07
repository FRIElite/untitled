import { distance } from 'mathjs';
import { Movie, User } from '../common/interfaces';

// const k = 10;

export function predict(user: User, users: User[]): Movie {
    const userTitles = user.ratedMovies.sort().map(e => e.title);
    const userVec = user.ratedMovies.sort().map(e => e.userRating);
    const n = userVec.length;

    console.log(userVec);
    const movieRatings = users
        .filter(u => u.username !== user.username)
        .map(tmpUser => {
        const tmpUserTitles = tmpUser.ratedMovies.sort().map(e => e.title);
        const tmpUserVec = tmpUser.ratedMovies.sort().map(e => e.userRating);
        const tmpVec: number[] =  Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            if (tmpUserTitles.includes(userTitles[i])) {
                tmpVec[i] = tmpUserVec[tmpUserTitles.indexOf(userTitles[i])];
            }
        }
        console.log(tmpVec);
        return {ratedMovies: tmpUser.ratedMovies, vec: tmpVec} as MovieVec;
    });

    const sorted = movieRatings
        .sort((a: MovieVec, b: MovieVec) => distance(a.vec, userVec) as number);

    return sorted[0].ratedMovies
        .filter(m => !userTitles.includes(m.title))
        .sort((a, b) => a.userRating - b.userRating)[0];
}

interface MovieVec {
    ratedMovies: Movie[];
    vec: number[];
}
