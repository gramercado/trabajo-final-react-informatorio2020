import React from 'react';
import "./Jumbotron.css"


class Jumbotron extends React.Component {

    render() {
        return (
        <div className="jumbotron jumbotron-background">
                {this.props.children}
            </div>
        )
    }
}

export default Jumbotron;
