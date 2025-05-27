import { CreateUserDto } from '@/src/domain/dtos';
import { Request, Response } from 'express';

export class AuthController{
    constructor(){};

    public loginUser = (req: Request, res: Response) => {
        res.json('login user');
    };

    public registerUser = (req: Request, res: Response) => {
        const [errorMsg, dto] = CreateUserDto.create(req.body);
        if(errorMsg) {
            res.status(400).json({
                success: false,
                data: null,
                error: {message: errorMsg},
            });
            return;
        }
        res.json(dto);
    };
}