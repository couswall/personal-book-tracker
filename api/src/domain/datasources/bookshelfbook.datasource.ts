import { BookshelfBookEntity } from "@domain/entities";
import { AddToBookshelfDto } from "@domain/dtos/bookshelfBook/addToBookshelf-bookshelfBook.dto";

export abstract class BookshelfBookDatasource {
    abstract addToBookshelf(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity>;
}