import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup( () => {

        Meteor.publish( 'links', function () {
                return Links.find( {} );
            }
        );
    }
);

function onRoute( req, res, next ) {
    const token = req.params.token;
    const link = Links.findOne( { token } );

    if ( link ) { // found one
        Links.update( link, { $inc: { clicks: 1 } } );
        res.writeHead( 307, { 'Location': link.url } );
        res.end();
    } else { // no link
        next();
    }

}

const middleware = ConnectRoute( function ( router ) {
        router.get( '/:token', onRoute );
    }
);

WebApp.connectHandlers.use( middleware );
