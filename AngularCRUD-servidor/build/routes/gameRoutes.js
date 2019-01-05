"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControlles_1 = __importDefault(require("../controllers/gamesControlles"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControlles_1.default.list);
        this.router.get('/:id', gamesControlles_1.default.listOne);
        this.router.post('/', gamesControlles_1.default.create);
        this.router.put('/:id', gamesControlles_1.default.update);
        this.router.delete('/:id', gamesControlles_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
