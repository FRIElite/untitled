import { Db, MongoClient, ObjectId } from 'mongodb';
import { Genre, Movie, MovieRef, User } from '../common/interfaces';

export class MongoService {
    private client: MongoClient;
    private db: Db;

    constructor() {
        if (!process.env.MONGODB_URL) {
            throw new Error('Missing MONGODB_URL in the .env');
        }
        if (!process.env.DB_NAME) {
            throw new Error('Missing DB_NAME in the .env');
        }
        this.client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true });
        this.connect();
    }

    public async connect(): Promise<void> {
        console.log(process.env.MONGODB_URL);
        await this.client.connect();
        this.db = this.client.db(process.env.DB_NAME);
    }

    public async listDatabases(): Promise<any> {
        return this.db.admin().listDatabases();
    }

    public async getAllUsers(): Promise<User[]> {
        return this.db.collection<User>('users').find({}).toArray();
    }

    public async getByUsername(username: string): Promise<User> {
        return this.db.collection<User>('users').findOne({ username: username }) as Promise<User>;
    }

    public async getMovieById(id: ObjectId): Promise<Movie> {
        return this.db.collection<Movie>('movies').findOne({ _id: id }) as Promise<Movie>;
    }

    public async insertUser(user: User): Promise<void> {
        this.db.collection('users').insertOne(user);
    }

    public async updateUserRecommended(id: ObjectId, movie: MovieRef): Promise<void> {
        this.db.collection('users').updateOne({ _id: id }, { $push: { recommendedMovies: movie } });
    }

    public async updateUserRated(id: ObjectId, movie: MovieRef): Promise<void> {
        this.db
            .collection('users')
            .updateMany(
                { _id: id },
                { $push: { ratedMovies: movie }, $pull: { recommendedMovies: { id: new ObjectId(movie.id) } } }
            );
    }

    public async getGenreById(id: number): Promise<Genre> {
        return this.db.collection<Genre>('genres').findOne({ id: id }) as Promise<Genre>;
    }
}
