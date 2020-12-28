import React from "react";

export default class Lead extends React.Component {

    render() {
        return (
        <>
            <p className="lead"> {this.props.parrafo}</p>
        </>
        )
    }
}
