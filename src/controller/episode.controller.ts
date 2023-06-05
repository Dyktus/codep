import {Controller} from "../utils/Controller";
import {EpisodeService} from "../service/episode.service";
import {PaginatedResponse} from "../utils/PaginatedResponse";


export class EpisodeController extends Controller {

    public constructor(
        req: any,
        res: any,
        next: any,
        private readonly episodeService: EpisodeService
    ) {
        super(req, res, next);
    }

    public async list() {
        const episodes = await this.episodeService.getAllEpisodes(this.req.query.page, this.req.query.limit);

        this.res.send((
            new PaginatedResponse(episodes[0], episodes[1], this.req.query.page, this.req.query.limit)
            ).toJSON()
        );
    }

    public async getOne() {
        const id = this.req.params.id;
        if (!id) {
            return this.res.status(400).send('Id is required');
        }
        this.res.send(await this.episodeService.getEpisodeById(id));
    }

    public async post() {
        const reqBody = this.req.body;
        const episode = await this.episodeService.addEpisode(reqBody);
        return this.res.status(204).send(episode);
    }

    public async put() {
        const reqBody = this.req.body;
        const id = this.req.params.id;
        if (!id) {
            return this.res.status(400).send('Id is required');
        }
        const episode = await this.episodeService.getEpisodeById(id);
        if (!episode) {
            return this.res.status(404).send('Episode not found');
        }
        await this.episodeService.updateEpisode(reqBody, episode);
        const updatedEpisode = await this.episodeService.getEpisodeById(id);
        return this.res.send(updatedEpisode);
    }

    public async delete() {
        const id = this.req.params.id;
        if (!id) {
            return this.res.status(400).send('Id is required');
        }
        const episode = await this.episodeService.getEpisodeById(id);
        if (!episode) {
            return this.res.status(404).send('Episode not found');
        }
        await this.episodeService.removeEpisode(id);

        return this.res.send({status: 'ok'});
    }
}
