"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
class CharacterService {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async fetchAll() {
        return await this.characterRepository.find();
    }
    async fetchOne(id) {
        return await this.characterRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async addCharacter(character) {
        return await this.characterRepository.save({
            name: character.name,
            planet: character.planet,
        });
    }
}
exports.CharacterService = CharacterService;
