import { UserEntity } from "@domain/entities/user.entity";
import { CreateUserDto } from "@domain/dtos";

export abstract class UserDatasource{
    abstract create(createUserDto: CreateUserDto): Promise<UserEntity>;
}