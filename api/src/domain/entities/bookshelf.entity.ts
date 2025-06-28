import { BookshelfType } from "@/generated/prisma";
import { UserEntity } from "@domain/entities/user.entity";

export class BookshelfEntity{
    constructor(
        public id: number,
        public name: string,
        public type: BookshelfType = 'CUSTOM',
        public userId: number,
        public user: UserEntity,
        public books: BookshelfEntity[] = [],
        public deletedAt: Date | null,
    ){};
}