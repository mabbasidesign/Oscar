import React from 'react';
import {ActorsList} from './data/actors';
import { Link } from 'react-router-dom';

const Actro = (props) => {

    return ( 
        <div className="main-content">
        <div><Link className='back' to='/'>Back</Link></div>
            <div className="container">
                <div className="image-profile"></div>
                <h2></h2>
                <p></p>
            </div>
        </div>
     );
}

export default Actro;