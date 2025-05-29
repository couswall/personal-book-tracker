import { UserEntity } from "@domain/entities/user.entity";
import { CreateUserDto, LoginUserDto } from "@domain/dtos";

export abstract class UserRepository{
    abstract create(createUserDto: CreateUserDto): Promise<UserEntity>;
    abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;
}