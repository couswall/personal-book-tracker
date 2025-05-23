import { Request, Response } from 'express';

export class AuthController{
    constructor(){};

    public loginUser = (req: Request, res: Response) => {
        res.json('login user');
    };

    public registerUser = (req: Request, res: Response) => {
        res.json('register user');
    };
}