import React from 'react';
import './css/Navigation.css';
import {Link} from 'react-router-dom';

export default function Navigation(){
    return (
      <header className="page-header" >
        <nav>
          <Link className="button" to="/">About</Link>
          <Link className="button" to="/portfolio">Portfolio</Link>
        </nav>
      </header>
    )
  }