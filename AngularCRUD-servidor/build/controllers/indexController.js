"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.send('Hello!!');
    }
}
exports.indexController = new IndexController();
