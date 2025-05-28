import { UserDatasource } from "@/src/domain/datasources/user.datasource";
import { CreateUserDto } from "@/src/domain/dtos";
import { UserEntity } from "@/src/domain/entities/user.entity";
import { UserRepository } from "@/src/domain/repositories/user.repository";

export class UserRepositoryImpl implements UserRepository{
    constructor(
        private readonly datasource: UserDatasource,
    ){};

    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.datasource.create(createUserDto);
    }
}