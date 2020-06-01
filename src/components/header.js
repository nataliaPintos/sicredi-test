import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="link" to="/login">Logout</Link>
        <Link className="link" to="/new-dragon">Novo Dragão</Link>
      </header>
    );
  }
}

export { Header };