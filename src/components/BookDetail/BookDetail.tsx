import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p>{book.abstract}</p>
    </div>
  );
};
