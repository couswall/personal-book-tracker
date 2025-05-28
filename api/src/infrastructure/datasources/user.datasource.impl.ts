import { prisma } from "@/src/data/postgres";
import { CreateUserDto } from "@domain/dtos";
import { UserEntity } from "@domain/entities/user.entity";
import { UserDatasource } from "@domain/datasources/user.datasource";
import { CustomError } from "@domain/errors/custom.error";

export class UserDatasourceImpl implements UserDatasource{
    
    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const existingUsername = await prisma.user.findFirst({
            where: {username: createUserDto.username}
        });

        const existingEmail = await prisma.user.findFirst({
            where: {email: createUserDto.email}
        });

        if(existingUsername) throw CustomError.badRequest('User with provided username already exists');
        if(existingEmail) throw CustomError.badRequest('User with provided email already exists');

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
}