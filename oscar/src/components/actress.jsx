import React from 'react'
import {ActressLink} from '../components/data/actress';
import {Link} from 'react-router-dom';

const Actress = () => {
    const actress = ActressLink.map((person) => {
        return (
            <div className="actor-container">
                <a>
                    {/* <img className="actor-image" src={person.img_src} /> */}
                    <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        )
    })

    return ( 
        <div className="main-content">
        <div><Link className='back' to='/'>Back</Link></div>
        <h2>Best Actress</h2>
            <div className="container">
                {actress}
            </div>
        </div>
     );
}

export default Actress;