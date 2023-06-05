import {CharacterService} from "../service/character.service";
import {Character} from "../entity/Character";
import {EpisodeService} from "../service/episode.service";
import {Episode} from "../entity/Episode";
import {AppDataSource} from "../data-source";
import {CharacterEpisode} from "../entity/CharacterEpisode";


export class ServiceProvider {

    public static get characterService() {
        return new CharacterService(
            AppDataSource.getRepository(Character),
            AppDataSource.getRepository(CharacterEpisode)
        );
    }

    public static get episodeService() {
        return new EpisodeService(AppDataSource.getRepository(Episode));
    }
}
