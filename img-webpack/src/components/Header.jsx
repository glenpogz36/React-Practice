import React from 'react';
import { Link } from 'react-router-dom';
import dog from '../../assests/img/dog.jpg';
function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <img src={dog} alt=""/>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;