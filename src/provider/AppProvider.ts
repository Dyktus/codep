import * as express from 'express';
import {ControllerProvider} from "./ControllerProvider";
import {AppDataSource} from "../data-source";

export class AppProvider {

    private app: express.Application;

    public constructor() {
        this.app = express()
        this.app.use(express.json())
    }

    public registerRoutes() {
        // Characters routes
        this.app.get('/character', (req, resp, next) => ControllerProvider.charactersController(req, resp, next).list())
        this.app.get('/character/:id', (req, resp, next) => ControllerProvider.charactersController(req, resp, next).getOne())
        this.app.post('/character', (req, resp, next) => ControllerProvider.charactersController(req, resp, next).post())
        this.app.put('/character/:id', (req, resp, next) => ControllerProvider.charactersController(req, resp, next).put())
        this.app.delete('/character/:id', (req, resp, next) => ControllerProvider.charactersController(req, resp, next).delete())

        // Episode routes
        this.app.get('/episode', (req, resp, next) => ControllerProvider.episodeController(req, resp, next).list())
        this.app.get('/episode/:id', (req, resp, next) => ControllerProvider.episodeController(req, resp, next).getOne())
        this.app.post('/episode', (req, resp, next) => ControllerProvider.episodeController(req, resp, next).post())
        this.app.put('/episode/:id', (req, resp, next) => ControllerProvider.episodeController(req, resp, next).put())
        this.app.delete('/episode/:id', (req, resp, next) => ControllerProvider.episodeController(req, resp, next).delete())
        return this;
    }

    public async start() {
        AppDataSource.initialize();
        this.app.listen(3000, () => {
            console.log(`Example app listening on port ${3000}`)
        })
    }
}
