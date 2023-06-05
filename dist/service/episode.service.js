"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeService = void 0;
class EpisodeService {
    constructor(episodeRepository) {
        this.episodeRepository = episodeRepository;
    }
    async fetchAll() {
        return await this.episodeRepository.find();
    }
}
exports.EpisodeService = EpisodeService;
