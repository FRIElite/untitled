
import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// app.use("/static", express.static(path.join(__dirname, "../front-end/build/static")));
app.use(express.static(path.join(__dirname, '../front-end/build')));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
