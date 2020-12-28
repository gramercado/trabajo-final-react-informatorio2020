import React from "react";
import "./CardContainer.css";

class CardContainer extends React.Component {

    render() {
        return <div className="card-group rows">{this.props.children}</div>;
    }
}

export default CardContainer;
