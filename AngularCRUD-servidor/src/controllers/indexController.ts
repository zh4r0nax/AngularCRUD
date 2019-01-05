import { Request, Response } from 'express';


class IndexController {
    constructor() {
        
    }

    index(req:Request, res:Response){
        res.send('Hello!!');
    }

}

export const indexController = new IndexController();