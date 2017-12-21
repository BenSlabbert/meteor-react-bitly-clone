import { Mongo } from 'meteor/mongo';

Meteor.methods( {
    'links.insert': function ( url ) {
        console.log( 'saving url:', url );
    }
} );

export const Links = new Mongo.Collection( 'links' );
