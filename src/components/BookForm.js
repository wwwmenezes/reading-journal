import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const BookForm = ({ onAddBook }) => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', year: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!book.title.trim()) newErrors.title = 'Título é obrigatório';
    if (!book.author.trim()) newErrors.author = 'Autor é obrigatório';
    if (!book.genre.trim()) newErrors.genre = 'Gênero é obrigatório';
    if (!book.year.trim()) newErrors.year = 'Ano é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAddBook(book);
    setBook({ title: '', author: '', genre: '', year: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>Adicionar Livro</h2>
      <input
        name="title"
        placeholder="Título"
        value={book.title}
        onChange={handleChange}
      />
      {errors.title && <small className="error">{errors.title}</small>}

      <input
        name="author"
        placeholder="Autor"
        value={book.author}
        onChange={handleChange}
      />
      {errors.author && <small className="error">{errors.author}</small>}

      <input
        name="genre"
        placeholder="Gênero"
        value={book.genre}
        onChange={handleChange}
      />
      {errors.genre && <small className="error">{errors.genre}</small>}

      <input
        name="year"
        placeholder="Ano"
        value={book.year}
        onChange={handleChange}
      />
      {errors.year && <small className="error">{errors.year}</small>}

      <button type="submit">
        <FaPlus style={{ marginRight: '5px' }} />
        Adicionar
      </button>
    </form>
  );
};

export default BookForm;
