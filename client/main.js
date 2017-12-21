import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import LinksCreate from './components/LinksCreate';
import LinkList from './components/LinkList';

const App = () => {
    return (
        <div>
            <Header/>
            <LinksCreate/>
            <LinkList/>
        </div>
    );
};

Meteor.startup( () => {
    ReactDOM.render( <App/>, document.querySelector( '.render-target' ) );
} );
