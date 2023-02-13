import { useCallback, useEffect, useState } from 'react';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';
import { Book, useBooks } from './domain/books';
import { CounterProvider } from './domain/counter';

function App() {
  // const book: Book | null = useBook('1001606140805');
  const { books, reload } = useBooks();
  useEffect(() => {
    reload();
  }, [reload]);

  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <CounterProvider
      counter={{
        count,
        increment,
        decrement,
      }}
    >
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
    </CounterProvider>
  );
}

export default App;
