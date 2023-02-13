import { Book } from '../../domain/books';
import { ThemeProvider } from '../../domain/theme/ThemeContext';
import { Counter } from '../Counter';
import { BookListItem } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
  onBookSelected?: (selectedBook: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected }) => {
  return (
    <ThemeProvider
      theme={{
        primaryColor: 'green',
        secondaryColor: 'red',
      }}
    >
      <Counter />
      <div>
        {books.map((book) => (
          <BookListItem
            key={book.title}
            book={book}
            onBookSelected={onBookSelected ?? (() => {})}
          />
        ))}
      </div>
    </ThemeProvider>
  );
};
