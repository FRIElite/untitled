import { Db, MongoClient } from 'mongodb';
import { User } from '../common/interfaces';


export class MongoService {
    private client: MongoClient;
    private db: Db;

    constructor() {
        if (!process.env.MONGODB_URL) { throw new Error('Missing MONGODB_URL in the .env'); }
        if (!process.env.DB_NAME) { throw new Error('Missing DB_NAME in the .env'); }
        this.client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true });
        this.connect();
    }

    public async connect(): Promise<void> {
        console.log(process.env.MONGODB_URL);
        await this.client.connect();
        this.db = this.client.db(process.env.DB_NAME);
    }

    public async listDatabases(): Promise<any> {
        const databasesList = this.db.admin().listDatabases();
        console.log(databasesList);
        return new Promise((resolve, reject) => resolve(databasesList));
    }

    public async getAllUsers(): Promise<User[]> {
        const users = this.db.collection<User>('users').find({}).toArray();
        return new Promise((resolve, reject) => resolve(users));
    }

    public async getByUsername(username: string): Promise<User[]> {
        const users = this.db.collection<User>('users').find({username: {'$regex': username}}).toArray();
        return new Promise((resolve, reject) => resolve(users));

    }

    public async insertUser(user: User): Promise<void> {
        this.db.collection('users').insertOne(user);
    }

}
