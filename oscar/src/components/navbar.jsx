import React from 'react';

const Navbar = () => {
    return (
        <nav>
          <h2 className="logo"><a>Oscars 2019</a></h2>
          <ul>
            <li><a>Home</a></li>
            <li><a>Best Actors</a></li>
            <li><a>Best Actress</a></li>
            <li><a>Best Films</a></li>
          </ul>
        </nav>
    );
}

export default Navbar;
