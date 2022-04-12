import React from 'react';
import { Link } from 'react-router-dom';
import Logopngwhite from '../../assets/img/agrovecpngwhite.png'

export default function NavBar(props) {
  return(
    <div className="divmae">
    {/* LOGO NAVBAR */}
    <img src={props.image} alt="" />
    {/* MENU NAVBAR */}
    <nav className="container-nav">
      <ul>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="">INÍCIO</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="">PRODUTOS</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="/Empresa">EMPRESA</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="/Contato">CONTATO</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}