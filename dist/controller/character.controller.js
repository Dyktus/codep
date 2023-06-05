"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const Controller_1 = require("../utils/Controller");
class CharacterController extends Controller_1.Controller {
    constructor(req, res, next, characterService) {
        super(req, res, next);
        this.characterService = characterService;
    }
    async list() {
        this.res.send('Hello World');
    }
    getOne() {
        this.res.send('Hello World');
    }
    async post() {
        const reqBody = this.req.body;
        const storedCharacter = await this.characterService.addCharacter(reqBody);
        this.res.send(await this.characterService.fetchOne(storedCharacter.id));
    }
    put() {
        this.res.send('Hello World');
    }
    delete() {
        this.res.send('Hello World');
    }
}
exports.CharacterController = CharacterController;
