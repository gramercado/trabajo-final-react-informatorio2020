import React from 'react';
import "../CardImage/Cardimage.css"

class CardImage extends React.Component {

    render() {
        return (
            <img className="card-img-top imagesize" src={this.props.url} alt="Producto" />
        )
    }
}

export default CardImage;
