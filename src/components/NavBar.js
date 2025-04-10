import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaPlus } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Reading Journal</h1>
      <ul>
        <li>
          <Link to="/">
            <FaHome style={{ marginRight: '5px' }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/list">
            <FaBook style={{ marginRight: '5px' }} />
            Lista de Livros
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FaPlus style={{ marginRight: '5px' }} />
            Adicionar Livro
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
