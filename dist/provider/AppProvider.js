"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = void 0;
const express = require("express");
const ControllerProvider_1 = require("./ControllerProvider");
class AppProvider {
    constructor() {
        this.app = express();
        this.app.use(express.json());
    }
    registerRoutes() {
        this.app.get('/characters', (req, resp, next) => ControllerProvider_1.ControllerProvider.charactersController(req, resp, next).list());
        this.app.get('/characters/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.charactersController(req, resp, next).getOne());
        this.app.post('/characters', (req, resp, next) => ControllerProvider_1.ControllerProvider.charactersController(req, resp, next).post());
        this.app.put('/characters/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.charactersController(req, resp, next).put());
        this.app.delete('/characters/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.charactersController(req, resp, next).delete());
        this.app.get('/episodes', (req, resp, next) => ControllerProvider_1.ControllerProvider.episodeController(req, resp, next).list());
        this.app.get('/episodes/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.episodeController(req, resp, next).getOne());
        this.app.post('/episodes', (req, resp, next) => ControllerProvider_1.ControllerProvider.episodeController(req, resp, next).post());
        this.app.put('/episodes/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.episodeController(req, resp, next).put());
        this.app.delete('/episodes/:id', (req, resp, next) => ControllerProvider_1.ControllerProvider.episodeController(req, resp, next).delete());
        return this;
    }
    start() {
        this.app.listen(3000, () => {
            console.log(`Example app listening on port ${3000}`);
        });
    }
}
exports.AppProvider = AppProvider;
