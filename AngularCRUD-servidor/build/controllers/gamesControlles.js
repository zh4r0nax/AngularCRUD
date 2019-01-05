"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('select * from games');
            res.json(games);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('select * from games where id =' + req.params.id);
            // console.log(games);
            if (games.length > 0) {
                res.json(games[0]);
            }
            else {
                res.status(404).json({ text: "Juego no encontrado" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('insert into games set ?', [req.body]);
            res.json({ text: 'juego : ' + req.body['title'] + ', Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('update games set ? where  id =?', [req.body, id]);
            res.json({ text: 'actualizando juego : ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('delete from games where id =' + req.params.id);
            // console.log(games);
            // console.log(games['affectedRows']);
            if (games['affectedRows'] == 1) {
                res.json({ text: 'juego eliminado con id: ' + req.params.id });
            }
            else {
                res.json({ text: 'juego no existe en games con id: ' + req.params.id });
            }
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
