import React, { useEffect } from 'react';
import { BookList } from './BookList';
import { useBooks } from '../../domain/books';

export const BooksPage: React.FC = () => {
  const { books, reload } = useBooks();
  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div>
      <h2>Books</h2>
      <button onClick={reload}>Reload books</button>
      {books ? (
        <BookList
          books={books}
          onBookSelected={(book) => {
            alert(book.price);
          }}
        />
      ) : (
        <span>Loading books</span>
      )}
    </div>
  );
};
