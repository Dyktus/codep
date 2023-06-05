import {Repository} from "typeorm";
import {Character} from "../entity/Character";
import {CharacterEpisode} from "../entity/CharacterEpisode";


export class CharacterService {

    public constructor(
        private readonly characterRepository: Repository<Character>,
        private readonly characterEpisodeRepository: Repository<CharacterEpisode>,
    ) {
    }

    private async addEpisodesToCharacter(character: Character) {
        const episodes = await this.characterEpisodeRepository.find({
            where: {character_id: character.id},
            relations: ["episode"]
        })
        return {
            ...character,
            episodes
        }
    }

    public async fetchAll(page: number, limit: number) {
        let characters: any = await this.characterRepository.findAndCount({
            skip: page - 1,
            take: limit
        });
        for (const key in characters) {
            characters[key] = await this.addEpisodesToCharacter(characters[key]);
        }
        return characters
    }

    public async getCharacter(id: number) {
        return await this.characterRepository.findOne({
            where: {
                id: id
            },
            relations: ["character_episodes"]
        });
    }

    public async addCharacterEpisodes(characterId: number, episodes: any) {
        return await this.characterEpisodeRepository.save({
            character_id: characterId,
            episode_id: episodes,
        });
    }

    public async addCharacter(character: any) {
        return await this.characterRepository.save({
            name: character.name,
            planet: character.planet,
        });
    }

}
