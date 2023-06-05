import "reflect-metadata"
import { DataSource } from "typeorm"
import { Character } from "./entity/Character"
import {Episode} from "./entity/Episode";
import { join } from 'path';
import {CharacterEpisode} from "./entity/CharacterEpisode";

export const AppDataSource = new DataSource({
    type: "mysql",
    host:  process.env.DATABASE_USERNAME || 'localhost',
    port: 3306,
    username: process.env.DATABASE_USERNAME || 'test',
    password: process.env.DATABASE_PASSWORD || 'test',
    database: process.env.DATABASE_NAME || 'db',
    synchronize: true,
    logging: false,
    entities: [Character, Episode, CharacterEpisode],
    migrations: [
        join(__dirname, './src/migrations/{.ts,*.js}')
    ],
    migrationsTableName: '_migrations',
    migrationsRun: true, // Run them automatically
    subscribers: [],

})
