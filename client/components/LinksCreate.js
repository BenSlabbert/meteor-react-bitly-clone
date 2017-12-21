import React, { Component } from 'react';

class LinksCreate extends Component {

    handleSubmit( e ) {
        e.preventDefault();
        let link = this.refs.link.value;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind( this )}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="link" className="form-control"/>
                </div>
                <button className="btn btn-primary">Shorten</button>
            </form>
        );
    }
}

export default LinksCreate;
