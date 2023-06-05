"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
}
exports.Controller = Controller;
