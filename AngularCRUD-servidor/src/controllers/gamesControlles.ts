import { Request, Response } from 'express';
import pool  from'../database';

class GamesController {
    constructor() {
        
    }

    public async list(req:Request, res:Response): Promise<void> {
        const games = await pool.query('select * from games');
        res.json(games);
    }

    public async listOne(req:Request, res:Response): Promise<void> {
        const games = await pool.query('select * from games where id ='+ req.params.id);
        // console.log(games);
        if(games.length > 0){
            res.json(games[0]);    
        }else{
            res.status(404).json({text :"Juego no encontrado"});
        }
        
    }

    public async create(req:Request,res:Response): Promise<void> {
        // console.log(req.body);
        await pool.query('insert into games set ?', [req.body]);
        res.json({text: 'juego : '+req.body['title']+ ', Guardado'});
    }
    
    public async update(req:Request,res:Response):Promise<void> {
        const { id } = req.params;
        const games = await pool.query('update games set ? where  id =?',[req.body,id] );
        res.json({text: 'actualizando juego : '+ id});
    }
    
    public async delete(req:Request,res:Response){
        const games = await pool.query('delete from games where id ='+ req.params.id);
        // console.log(games);
        // console.log(games['affectedRows']);
        if(games['affectedRows'] == 1){
            res.json({text: 'juego eliminado con id: '+ req.params.id});
        }else {
            res.json({text: 'juego no existe en games con id: '+ req.params.id});
        }
        
    }

}

const gamesController = new GamesController();
export default gamesController;