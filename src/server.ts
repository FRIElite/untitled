import { json } from 'body-parser';
import express from 'express';
import path from 'path';
import { User } from '../common/interfaces';
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
    res.send(recommendation);
});

app.post('/user/new', (req, res) => {
    mongo.insertUser(req.body as User);
    res.sendStatus(200);
});



app.use(express.static(path.join(__dirname, '../front-end/build')));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
