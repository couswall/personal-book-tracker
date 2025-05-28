import { BCryptAdapter } from "@/src/config";
import { UserEntity } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";
import { CreateUserDto } from "@domain/dtos";

interface CreateUserUseCase{
    execute(dto: CreateUserDto): Promise<UserEntity>;
}

export class CreateUser implements CreateUserUseCase{
    constructor(
        private readonly repository: UserRepository,
    ){};

    execute(dto: CreateUserDto): Promise<UserEntity> {
        const hashPassword = BCryptAdapter.hash(dto.password);
        const newDto = new CreateUserDto(
            dto.fullName,
            dto.username,
            dto.email,
            hashPassword
        );
        
        return this.repository.create(newDto)
    }
}