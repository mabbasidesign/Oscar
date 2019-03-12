import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
          <h2 className="logo"><a>{props.title}</a></h2>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><Link to={"/actors"}>Best Actors</Link></li>
            <li><Link to={"/actress"}>Best Actress</Link></li>
            <li><Link to={"/films"}>Best Films</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;
