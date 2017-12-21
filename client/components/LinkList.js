import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Links } from '../../imports/collections/links';

class LinkList extends Component {

    renderRows() {
        return this.props.links.map( link => {
            const { url, clicks, token } = link;

            const shortLink = `http://localhost:9000/${token}`;

            return (
                <tr>
                    <td>{url}</td>
                    <td>
                        <a href={shortLink}>{shortLink}</a>
                    </td>
                    <td>{clicks}</td>
                </tr>
            );
        } );
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>URL</th>
                    <th>Address</th>
                    <th>Clicks</th>
                </tr>
                </thead>

                <tbody>
                {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default createContainer( () => {
    Meteor.subscribe( 'links' );

    let links = Links.find( {} ).fetch();
    console.log( links );
    return {
        links: links
    }
}, LinkList );