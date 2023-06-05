import {CharacterController} from "../controller/character.controller";
import {EpisodeController} from "../controller/episode.controller";
import {ServiceProvider} from "./ServiceProvider";


export class ControllerProvider {

    public static charactersController(request: any, response: any, next: any) {
        return new CharacterController(request, response, next, ServiceProvider.characterService)
    }

    public static episodeController(request: any, response: any, next: any) {
        return new EpisodeController(request, response, next, ServiceProvider.episodeService)
    }
}
