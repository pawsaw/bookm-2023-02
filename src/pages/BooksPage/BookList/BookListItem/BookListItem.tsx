import { Book } from '../../../../domain/books';
import { useTheme } from '../../../../domain/theme/ThemeContext';

export interface BookListItemProps {
  book: Book;
  onBookSelected: (selectedBook: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  const { primaryColor } = useTheme();

  return (
    <>
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
