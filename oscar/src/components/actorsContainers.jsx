import React from 'react'
import {Route} from 'react-router-dom';
import {ActorsList} from '../components/data/actors';
import Actor from './actor';
import Actors from './actors';

const ActorContainer = (props) => {

    let actorUrl = ActorsList.map((actor) => {
        return (
            <Route path={`/actors/${actor.url}`} render={() => <Actor />} />
        );
    });

    // let actorUrl = ActorsList.map((actor) => (
    //         <Route path={`/actors/${actor.url}`} render={() => {<Actor />}} />
    // ));

    return (
        <div>
            <Route path="/actors" render={() => <Actors title='Best Actors' />} />
            {actorUrl}
        </div>
    );
}

export default ActorContainer;
