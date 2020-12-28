import React from 'react';

class CardPrice extends React.Component {

    render() {
        return (
            <div>
                <p className="card-text" >
                    {'$ '+(this.props.price*162).toFixed(2)}
                </p>    
             </div>
        )
    }
}

export default CardPrice;
