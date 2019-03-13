import React from 'react';
import {ActorsList} from './data/actors';
import { Link } from 'react-router-dom';

const Actro = (props) => {

    return ( 
        <div className="main-content">
        <div><Link className='back' to='/actors'>Back</Link></div>
            <div className="container">
                <div style={{ backgroundImage: "url(" + props.image + ")" }} className="image-profile"></div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
     );
}

export default Actro;