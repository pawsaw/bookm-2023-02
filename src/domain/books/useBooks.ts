import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Book } from './Book';
import { setBooks } from './store';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const books = useSelector<AppState, Book[] | null>((state) => state.books.books);
  const dispatch = useDispatch();

  const reload = useCallback(async () => {
    dispatch(setBooks({ books: null }));
    const response = await fetch(`http://localhost:4730/books`);
    const _books: Book[] = await response.json();
    dispatch(setBooks({ books: _books }));
  }, [dispatch]);

  // useEffect(() => {
  //   reload();
  // }, [reload]);

  return {
    books,
    reload,
  };
};
