import { prisma } from "@data/postgres";
import { BCryptAdapter } from "@src/config";
import { CreateUserDto, LoginUserDto } from "@domain/dtos";
import { CustomError } from "@domain/errors/custom.error";
import { UserEntity } from "@domain/entities/user.entity";
import { UserDatasource } from "@domain/datasources/user.datasource";
import { ERROR_MESSAGES } from "@infrastructure/constants";

export class UserDatasourceImpl implements UserDatasource{
    
    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const existingUsername = await prisma.user.findFirst({
            where: {username: createUserDto.username, deletedAt: null,}
        });

        const existingEmail = await prisma.user.findFirst({
            where: {email: createUserDto.email, deletedAt: null,}
        });

        if(existingUsername) throw CustomError.badRequest(ERROR_MESSAGES.USER.CREATE.EXISTING_USERNAME);
        if(existingEmail) throw CustomError.badRequest(ERROR_MESSAGES.USER.CREATE.EXISTING_EMAIL);

        const newUser = await prisma.user.create({
            data: {
                fullName: createUserDto.fullName,
                username: createUserDto.username,
                email: createUserDto.email,
                password: createUserDto.password
            }
        });

        return UserEntity.fromObject(newUser);
    }

    async login(loginUserDto: LoginUserDto): Promise<UserEntity>{
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {email: loginUserDto.emailOrUsername, deletedAt: null,},
                    {username: loginUserDto.emailOrUsername, deletedAt: null,},
                ]
            } 
        });

        if(!user) throw CustomError.badRequest(ERROR_MESSAGES.USER.LOGIN.INVALID_CREDENTIALS);

        const passwordMatch = BCryptAdapter.compare(loginUserDto.password, user.password);

        if(!passwordMatch) throw CustomError.badRequest(ERROR_MESSAGES.USER.LOGIN.INVALID_CREDENTIALS);

        return UserEntity.fromObject(user);
    }
}