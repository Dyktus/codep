"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Character_1 = require("./entity/Character");
const Episode_1 = require("./entity/Episode");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DATABASE_USERNAME || 'localhost',
    port: 3306,
    username: process.env.DATABASE_USERNAME || 'test',
    password: process.env.DATABASE_PASSWORD || 'test',
    database: process.env.DATABASE_NAME || 'test',
    synchronize: true,
    logging: false,
    entities: [Character_1.Character, Episode_1.Episode],
    migrations: [],
    subscribers: [],
});
