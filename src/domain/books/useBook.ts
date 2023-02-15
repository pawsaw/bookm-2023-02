import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Book, ISBN } from './Book';
import { addBook } from './store';

export const useBook = (isbn: ISBN): Book | null => {
  const book = useSelector<AppState, Book | null>(
    (state) => state.books.books?.find((book) => book.isbn === isbn) ?? null,
  );
  const dispatch = useDispatch();

  const fetchBook = useCallback(async () => {
    if (book === null) {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const _book: Book = await response.json();
      dispatch(addBook({ book: _book }));
    }
  }, [isbn, book, dispatch]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return book;
};
