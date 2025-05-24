import { ICreateUserEntity } from "@domain/interfaces/user.interfaces";

export class UserEntity{
    constructor(
        public id: number,
        public fullName: string,
        public username: string,
        public email: string,
        public password: string,
        public deletedAt: Date | null,
    ){};

    public static fromObject(userObject: ICreateUserEntity): UserEntity{
        return new UserEntity(
            userObject.id,
            userObject.fullName,
            userObject.username,
            userObject.email,
            userObject.password,
            userObject.deletedAt,
        );
    };
}