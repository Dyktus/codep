import {Controller} from "../utils/Controller";
import {CharacterService} from "../service/character.service";
import {PaginatedResponse} from "../utils/PaginatedResponse";

export class CharacterController extends Controller {

    public constructor(
        req: any,
        res: any,
        next: any,
        private readonly characterService: CharacterService
    ) {
        super(req, res, next);
    }
    public async list() {
        const characters = await this.characterService.fetchAll(this.req.query.page, this.req.query.limit);
        this.res.send((
                new PaginatedResponse(characters[0], characters[1], this.req.query.page, this.req.query.limit)
            ).toJSON()
        );
    }

    public getOne() {
        this.res.send('Hello World')
    }

    public async post() {
        const reqBody = this.req.body;

        const storedCharacter = await this.characterService.addCharacter(reqBody);
        await this.characterService.addCharacterEpisodes(storedCharacter.id, reqBody.episodes);
        this.res.send(await this.characterService.getCharacter(storedCharacter.id));
    }

    public put() {
        this.res.send('Hello World')
    }

    public delete() {
        this.res.send('Hello World')
    }
}
