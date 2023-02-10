import { BookList } from './components/BookList';
import { books } from './junk/books';

function App() {
  return (
    <div>
      <h1>Book Manager</h1>
      <BookList
        books={books}
        onBookSelected={(book) => {
          alert(book.price);
        }}
      />
    </div>
  );
}

export default App;
