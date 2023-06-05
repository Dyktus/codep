"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeController = void 0;
const Controller_1 = require("../utils/Controller");
class EpisodeController extends Controller_1.Controller {
    async list() {
        this.res.send('Hello World');
    }
    getOne() {
        this.res.send('Hello World');
    }
    post() {
        this.res.send('Hello World');
    }
    put() {
        this.res.send('Hello World');
    }
    delete() {
        this.res.send('Hello World');
    }
}
exports.EpisodeController = EpisodeController;
