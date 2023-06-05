"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerProvider = void 0;
const character_controller_1 = require("../controller/character.controller");
const episode_controller_1 = require("../controller/episode.controller");
const ServiceProvider_1 = require("./ServiceProvider");
class ControllerProvider {
    static charactersController(request, response, next) {
        return new character_controller_1.CharacterController(request, response, next, ServiceProvider_1.ServiceProvider.characterService);
    }
    static episodeController(request, response, next) {
        return new episode_controller_1.EpisodeController(request, response, next);
    }
}
exports.ControllerProvider = ControllerProvider;
