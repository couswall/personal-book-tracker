import { CreateUserDto, LoginUserDto } from "@domain/dtos";
import { UserEntity } from "@domain/entities/user.entity";
import { UserDatasource } from "@domain/datasources/user.datasource";
import { createUserDtoObj, loginUserDtoObj, userEntity } from "tests/fixtures";

describe('user.datasource tests', () => {
    
    class MockUserDatasource implements UserDatasource{
        async create(createUserDto: CreateUserDto): Promise<UserEntity> {
            return userEntity;
        }
        async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
            return userEntity;
        }
    }

    const mockUserDatasource = new MockUserDatasource();

    test('abstract class should include all its methods', () => {
        expect(mockUserDatasource).toBeInstanceOf(MockUserDatasource);
        expect(typeof mockUserDatasource.create).toBe('function');
        expect(typeof mockUserDatasource.login).toBe('function');
    });

    test('create method should return an UserEntity instance', async () => {
        const [,dto] = CreateUserDto.create(createUserDtoObj);

        const result = await mockUserDatasource.create(dto!);
        
        expect(result).toBeInstanceOf(UserEntity);
    });

    test('login method should return an UserEntity instance', async () => {
        const [,dto] = LoginUserDto.create(loginUserDtoObj);

        const result = await mockUserDatasource.login(dto!);
        
        expect(result).toBeInstanceOf(UserEntity);
    });
});