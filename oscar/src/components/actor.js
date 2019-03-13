import React from 'react';
import {ActorsList} from './data/actors';
import { Link } from 'react-router-dom';

const Actro = () => {

    return ( 
        <div className="main-content">
        <div><Link className='back' to='/'>Back</Link></div>
        <h2>Best Actors</h2>
            <div className="container">
            </div>
        </div>
     );
}

export default Actro;