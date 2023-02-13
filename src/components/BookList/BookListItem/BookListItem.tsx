import { Book } from '../../../domain/books';
import { useCounter } from '../../../domain/counter';
import { useTheme } from '../../../domain/theme/ThemeContext';

export interface BookListItemProps {
  book: Book;
  onBookSelected: (selectedBook: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  const { primaryColor } = useTheme();
  const { count, increment } = useCounter();
  return (
    <>
      BookListItem says: counter is: {count}
      <button onClick={increment}>+</button>
      <div
        onClick={() => onBookSelected(book)}
        style={{
          color: primaryColor,
        }}
      >
        {book.title}
      </div>
    </>
  );
};
