import { useEffect } from 'react';
import { BookList } from './components/BookList';
import { Book, useBooks } from './domain/books';

function App() {
  // const book: Book | null = useBook('1001606140805');
  const { books, reload } = useBooks();
  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div>
      <h1>Book Manager</h1>
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
      {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
    </div>
  );
}

export default App;
