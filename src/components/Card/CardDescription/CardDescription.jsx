import React from 'react';

class CardDescription extends React.Component {

    render() {
        return (
            <div>
                <p className="card-text" >
                    {this.props.description}
                </p>    
             </div>
        )
    }
}

export default CardDescription;
