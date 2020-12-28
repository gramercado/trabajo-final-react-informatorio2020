import React from "react";

class Header extends React.Component {

    render() {
        return <h1 className="display-4"> {this.props.title} </h1>;
    }
}

export default Header;
