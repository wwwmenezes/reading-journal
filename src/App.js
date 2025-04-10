import React, { useState } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <BookForm onAddBook={addBook} />
        <BookList books={books} onDeleteBook={deleteBook} />
      </div>
    </>
  );
}

export default App;
