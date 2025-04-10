import React from 'react';
import { FaTrash } from 'react-icons/fa';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div className="book-list">
      <h2>Lista de Livros</h2>
      {books.length === 0 ? (
        <p>Nenhum livro adicionado ainda.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> — {book.author} ({book.genre}, {book.year})
              <button className="delete-btn" onClick={() => onDeleteBook(index)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
