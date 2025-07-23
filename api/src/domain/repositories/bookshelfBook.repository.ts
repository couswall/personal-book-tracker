import { BookshelfBookEntity } from "@domain/entities";
import { AddToBookshelfDto } from "@domain/dtos/bookshelfBook/addToBookshelf-bookshelfBook.dto";

export abstract class BookshelfBookRepository {
    abstract addToBookshelf(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity>;
}