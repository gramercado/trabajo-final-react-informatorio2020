import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardImage from './CardImage/CardImage';
import CardPrice from './CardPrice/CardPrice'
import './Card.css';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <CardImage url={this.props.product.image}  />
                <div className="card-body">
                    <CardTitle title={this.props.product.title} />
                    <CardPrice price={this.props.product.price} />
                </div>
            </div>
        );
    }
}

export default Card;
