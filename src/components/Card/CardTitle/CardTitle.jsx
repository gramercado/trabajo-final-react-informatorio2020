import React from 'react';

class CardTitle extends React.Component {
    
    render() {
        return (
            <h5 className="card-title" >{this.props.title}</h5>
        )
    }
}

export default CardTitle;
