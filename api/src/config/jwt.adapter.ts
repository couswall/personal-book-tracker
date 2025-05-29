import jwt, { SignOptions } from 'jsonwebtoken';
import { envs } from '@config/envs';

interface IPayloadJWT{
    id: number;
    username: string;
    email: string;
}

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {

    static async generateToken(payload: IPayloadJWT, duration: string = '2h'): Promise<string | undefined>{
        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, {expiresIn: duration} as SignOptions, (error, token) => {
                
                if(error) return resolve(undefined);

                resolve(token);
            });
        });
    }
}