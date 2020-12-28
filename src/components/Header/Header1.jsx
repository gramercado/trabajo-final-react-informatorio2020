import React from "react";

class Header1 extends React.Component {

    render() {
        return <h1 className="display-4 text-center font-weight-bold col-12 mb-60"> {this.props.title} </h1>;
    }
}

export default Header1;
