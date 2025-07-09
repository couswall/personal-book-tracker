import { BookshelfEntity } from "@domain/entities/index";
import { CreateCustomBookShelfDto } from "@domain/dtos/bookshelf/createCustom-bookshelf.dto";

export abstract class BookshelfRepository{
    abstract createCustom(createBookShelfDto: CreateCustomBookShelfDto): Promise<BookshelfEntity>;
}