import { Request, Response } from 'express';
import { CreateUserDto } from '@domain/dtos';
import { UserRepository } from '@domain/repositories/user.repository';
import { CreateUser } from '@domain/use-cases/user/create-user';
import { CustomError } from '@domain/errors/custom.error';

export class AuthController{
    constructor(
        private readonly repository: UserRepository
    ){};

    public loginUser = (req: Request, res: Response) => {
        res.json('login user');
    };

    public registerUser = (req: Request, res: Response) => {
        const [errorMsg, dto] = CreateUserDto.create(req.body);
        if(errorMsg) {
            res.status(400).json({
                success: false,
                error: {message: errorMsg},
            });
            return;
        }
        
        new CreateUser(this.repository)
            .execute(dto!)
            .then(user => {
                const {password, ...responseUser} = user;

                res.status(201).json({
                    success: true,
                    message: 'User created successfully',
                    data: {
                        user: responseUser,
                    },
                })
            })
            .catch(error => CustomError.handleError(error, res));
    };
}