import { Book } from '../../../domain/books';

export interface BookListItemProps {
  book: Book;
  onBookSelected: (selectedBook: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  return <div onClick={() => onBookSelected(book)}>{book.title}</div>;
};
