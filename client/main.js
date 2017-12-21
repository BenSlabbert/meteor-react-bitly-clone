import React from 'react';
import ReactDOM from 'react-dom';

import { Links } from '../imports/collections/links';

import Header from './components/Header';
import LinksCreate from './components/LinksCreate';

const App = () => {
    return (
        <div>
            <Header/>
            <LinksCreate/>
        </div>
    );
};

Meteor.startup( () => {
    ReactDOM.render( <App/>, document.querySelector( '.render-target' ) );
} );
