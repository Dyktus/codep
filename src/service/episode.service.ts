import {Repository} from "typeorm";
import {Episode} from "../entity/Episode";


export class EpisodeService {

    public constructor(private readonly episodeRepository: Repository<Episode>) {
    }

    public async addEpisode(episode: any) {
        return await this.episodeRepository.save({
            name: episode.name,
        });
    }

    public async getEpisodeById(id: number) {
        return await this.episodeRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public async removeEpisode(id: number) {
        return await this.episodeRepository.delete(id);
    }

    public async getAllEpisodes(page: number, limit: number) {
        return await this.episodeRepository.findAndCount({
            skip: page - 1,
            take: limit
        });
    }

    public async updateEpisode(reqBody: any, episode: Episode) {
        // Replace values
        episode.name = reqBody.name;

        return await this.episodeRepository.save([episode]);
    }
}
