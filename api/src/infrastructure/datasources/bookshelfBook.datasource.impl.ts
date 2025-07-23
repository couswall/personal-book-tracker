import { BookshelfBookDatasource } from "@domain/datasources/bookshelfbook.datasource";
import { AddToBookshelfDto } from "@domain/dtos/bookshelfBook/addToBookshelf-bookshelfBook.dto";
import { BookshelfBookEntity } from "@domain/entities";

export class BookshelfBookDatasourceImpl implements BookshelfBookDatasource{
    addToBookshelf(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity> {
        throw('Method not implemented')
    }
}