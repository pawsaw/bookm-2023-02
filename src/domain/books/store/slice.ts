import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../Book';

export const booksFeatureName = 'books';

export interface BooksState {
  books: Book[] | null;
}

export const initialBooksState: BooksState = {
  books: null,
};

const booksSlice = createSlice({
  name: booksFeatureName,
  initialState: initialBooksState,
  reducers: {
    setBooks(state: BooksState, action: PayloadAction<{ books: Book[] | null }>) {
      // return { ...state, books: action.payload.books };
      state.books = action.payload.books;
    },
    addBook(state: BooksState, action: PayloadAction<{ book: Book }>) {
      if (state.books) {
        state.books.push(action.payload.book);
      } else {
        state.books = [action.payload.book];
      }
    },
  },
});

export const { setBooks, addBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
