import { useParams } from 'react-router-dom';
import { BookDetail } from './BookDetail';
import { ISBN, useBook } from '../../domain/books';

export interface BookDetailPageParams {
  isbn: ISBN;
}

export const BookDetailPage: React.FC = () => {
  const { isbn } = useParams<BookDetailPageParams>();
  const book = useBook(isbn);

  return book ? <BookDetail book={book} /> : <span>Loading book...</span>;
};
