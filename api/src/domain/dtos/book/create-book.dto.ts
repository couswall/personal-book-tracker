import { ICreateBookDtoObj } from "@domain/interfaces/book.interfaces";

export class CreateBookDto{
    constructor(
        public readonly apiBookId: string,
        public readonly title: string,
        public readonly subtitle: string | null,
        public readonly authors: string[],
        public readonly description: string | null,
        public readonly publishedDate: Date | null,
        public readonly coverImageUrl: string | null,
        public readonly categories: string[],
        public readonly averageRating: number,
        public readonly reviewCount: number,
    ){};

    static validate(object: ICreateBookDtoObj): string | undefined{

        return undefined;
    };

    static create(object: ICreateBookDtoObj): [string?, CreateBookDto?]{

        const createBookDto = new CreateBookDto(
            object.apiBookId,
            object.title,
            object.subtitle,
            object.authors,
            object.description,
            object.publishedDate,
            object.coverImageUrl,
            object.categories,
            object.averageRating,
            object.reviewCount,
        );
        
        return[undefined, createBookDto];
    };
}