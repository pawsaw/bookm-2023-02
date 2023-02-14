import React, { CSSProperties } from 'react';
import './index.css';
import { Link, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { BookDetailPage } from './pages/BookDetailPage';

function App() {
  const history = useHistory();

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link style={styles.link} to="/books">
          Books
        </Link>
        <Link style={styles.link} to="/playground">
          Playground
        </Link>
      </nav>
      <h1>Book Manager</h1>
      <div style={styles.content}>
        <Switch>
          <Route path="/books/:isbn" component={BookDetailPage} />
          <Route
            path="/books"
            render={() => (
              <BooksPage
                onBookSelected={(book) => {
                  history.push(`/books/${book.isbn}`);
                }}
              />
            )}
          />
          <Route path="/playground" component={PlaygroundPage} />
          <Redirect to="/books" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

const styles: Record<string, CSSProperties> = {
  container: {
    width: '100%',
  },
  navbar: {
    width: '100%',
    borderBottom: '1px solid silver',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    gap: 20,
    color: 'white',
    padding: 20,
    position: 'sticky',
    top: 0,
  },
  link: {
    color: 'white',
  },
  content: {
    padding: 20,
  },
};
