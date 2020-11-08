import { json } from 'body-parser';
import express from 'express';
import { ObjectId } from 'mongodb';
import path from 'path';
import { MovieRef, User } from '../common/interfaces';
import { MongoService } from './mongoService';
import { predict } from './predict';
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
    const user = (await mongo.getByUsername(req.params.username))[0];
    const recommendation = predict(user, await mongo.getAllUsers());
    mongo.updateUserRecommended(user._id!, recommendation);
    res.send(recommendation);
});

app.get('/genre/:id', async (req, res) => {
    const genre = mongo.getGenreById(parseInt(req.params.id));
    res.send(genre);
});

app.post('/user/new', (req, res) => {
    mongo.insertUser(req.body as User);
    res.sendStatus(200);
});

app.put('/vote/:username', async (req, res) => {
    const user = (await mongo.getByUsername(req.params.username))[0];
    const movieRef: MovieRef = req.body;
    movieRef.id = new ObjectId(movieRef.id);
    mongo.updateUserRated(user._id!, movieRef);
    res.sendStatus(200);
});

app.put('/addmovie/:username', async (req, res) => {
    const user = (await mongo.getByUsername(req.params.username))[0];
    const movieRef: MovieRef = req.body;
    movieRef.id = new ObjectId(movieRef.id);
    mongo.updateUserRecommended(user._id!, movieRef);
    res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, '../front-end/build')));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
