import { json } from 'body-parser';
import express from 'express';
import { applyDependencies, re } from 'mathjs';
import { ObjectId } from 'mongodb';
import path from 'path';
import { moveSyntheticComments } from 'typescript';
import { Movie, MovieRef, User } from '../common/interfaces';
import { MongoService } from './mongoService';
import { predict, getFavouriteGenres } from './predict';
const app = express();
const port = process.env.PORT || 8080;

const mongo = new MongoService();

app.use(json());

app.get('/user', async (req, res) => {
    res.send(await mongo.getAllUsers());
});

app.get('/user/:username', async (req, res) => {
    res.send(await mongo.getByUsername(req.params.username));
});

app.get('/recommend/:username', async (req, res) => {
    const user = await mongo.getByUsername(req.params.username);
    const recommendation = predict(user, await mongo.getAllUsers());
    if (recommendation) {
        mongo.updateUserUnrated(user._id!, recommendation);
    }
    res.send(recommendation);
});

app.get('/genre/:id', async (req, res) => {
    const genre = mongo.getGenreById(parseInt(req.params.id));
    res.send(genre);
});

app.get('/movie/:id', async (req, res) => {
    const movie = await mongo.getMovieById(new ObjectId(req.params.id));
    res.send(movie);
});

app.get('/movie', async (req, res) => {
    const movies = await mongo.getMoviesByTitle(encodeURI(req.query.q as string));
    res.send(movies);
});

app.get('/topgenres/:username', async (req, res) => {
    const user = await mongo.getByUsername(req.params.username);
    const movies: Movie[] = [];
    for (let movie of user.ratedMovies) {
        movies.push(await mongo.getMovieById(movie._id!));
    }
    const topgenres = getFavouriteGenres(movies, user.ratedMovies).sort((a, b) => b.p - a.p);
    res.send(topgenres);
});

app.post('/user/new', (req, res) => {
    mongo.insertUser(req.body as User);
    res.sendStatus(200);
});

app.put('/vote/:username', async (req, res) => {
    const user = await mongo.getByUsername(req.params.username);
    const movieRef: MovieRef = req.body;
    movieRef._id = new ObjectId(movieRef._id);
    mongo.updateUserRated(user._id!, movieRef);
    res.sendStatus(200);
});

app.put('/addunrated/:username', async (req, res) => {
    const user = await mongo.getByUsername(req.params.username);
    const movieRef: MovieRef = req.body;
    movieRef._id = new ObjectId(movieRef._id);
    mongo.updateUserUnrated(user._id!, movieRef);
    res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, '../front-end/build')));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
