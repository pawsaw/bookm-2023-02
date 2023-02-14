import React, { useEffect } from 'react';
import { BookList, BookListProps } from './BookList';
import { useBooks } from '../../domain/books';

export interface BookPageProps {
  onBookSelected: BookListProps['onBookSelected'];
}

export const BooksPage: React.FC<BookPageProps> = ({ onBookSelected }) => {
  const { books, reload } = useBooks();

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div>
      <h2>Books</h2>
      <button onClick={reload}>Reload books</button>
      {books ? (
        <BookList books={books} onBookSelected={onBookSelected} />
      ) : (
        <span>Loading books</span>
      )}
    </div>
  );
};
