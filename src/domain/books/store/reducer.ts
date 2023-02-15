import { Book } from '../Book';

export const booksFeatureName = 'books';

export interface BooksState {
  books: Book[];
}

export const initialBooksState: BooksState = {
  books: [],
};

export const booksReducer = (state: BooksState = initialBooksState) => {
  return state;
};
