import { useState, useEffect, useCallback } from 'react';
import { Book, ISBN } from './Book';

export const useBook = (isbn: ISBN): Book | null => {
  const [book, setBook] = useState<Book | null>(null);

  const fetchBook = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const _book: Book = await response.json();
    setBook(_book);
  }, [isbn]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return book;
};
