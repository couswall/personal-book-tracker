import { BookshelfBookEntity } from "@domain/entities";
import { AddToBookshelfDto } from '@domain/dtos';

export interface AddToBookshelfUseCase{
    execute(addToBookshelfDto: AddToBookshelfDto): Promise<BookshelfBookEntity>;
}