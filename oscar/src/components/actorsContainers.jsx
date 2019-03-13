import React from 'react'
import {Route} from 'react-router-dom';
import {ActorsList} from '../components/data/actors';
import Actor from './actor';
import Actors from './actors';

const ActorContainer = (props) => {

    let actorUrl = ActorsList.map((actor) => {
        return (
            <Route path={`/actors/${actor.url}`} render={() => 
            <Actor 
            name={actor.name}
            description={actor.description}
            image={actor.profile_img}
            />} />
        );
    });

    // let actorUrl = ActorsList.map((actor) => (
    //         <Route path={`/actors/${actor.url}`} render={() => {<Actor />}} />
    // ));

    return (
        <div>
            <Route exact path="/actors" render={() => <Actors title='Best Actors' />} />
            {actorUrl}
        </div>
    );
}

export default ActorContainer;
