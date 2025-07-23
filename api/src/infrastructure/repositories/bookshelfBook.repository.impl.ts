import { BookshelfBookEntity } from "@domain/entities";
import { AddToBookshelfDto } from "@domain/dtos/bookshelfBook/addToBookshelf-bookshelfBook.dto";
import { BookshelfBookDatasource } from "@domain/datasources/bookshelfbook.datasource";
import { BookshelfBookRepository } from "@domain/repositories/bookshelfBook.repository";

export class BookshelfBookRepositoryImpl implements BookshelfBookRepository{
    constructor(
        private readonly datasource: BookshelfBookDatasource
    ){};
    
    addToBookshelf(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity> {
        return this.datasource.addToBookshelf(addToBookshelfDto);
    }
}