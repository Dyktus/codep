"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
const character_service_1 = require("../service/character.service");
const Character_1 = require("../entity/Character");
const episode_service_1 = require("../service/episode.service");
const Episode_1 = require("../entity/Episode");
const data_source_1 = require("../data-source");
class ServiceProvider {
    static get characterService() {
        return new character_service_1.CharacterService(data_source_1.AppDataSource.getRepository(Character_1.Character));
    }
    static get episodeService() {
        return new episode_service_1.EpisodeService(data_source_1.AppDataSource.getRepository(Episode_1.Episode));
    }
}
exports.ServiceProvider = ServiceProvider;
