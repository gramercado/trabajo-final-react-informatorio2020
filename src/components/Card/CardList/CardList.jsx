import React from "react";
import Card from "../Card";

class CardList extends React.Component {

    render() {
        const { products } = this.props;

        return (
            <>
                {/* {products.map((product) => (
                    <Card product={product} />
                ))} */}

                {products 
                ? products.map((product) => <Card className="col-4" product={product} />)
                : <p> No hay productos para mostrar </p>
                }
                
            </>
        );
    }
}

export default CardList;
