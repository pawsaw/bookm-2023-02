import { Book } from '../../domain/books';
import { BookListItem } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
  onBookSelected?: (selectedBook: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.title} book={book} onBookSelected={onBookSelected ?? (() => {})} />
      ))}
    </div>
  );
};
