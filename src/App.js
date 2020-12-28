
import React from "react";
import ProductService from "./services/ProductService";
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header1";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import CardContainer from "./components/Card/CardContainer/CardContainer";
import CardList from "./components/Card/CardList/CardList";
import Lead from "./components/Jumbotron/Lead";
import Paragraph from "./components/Jumbotron/Paragraph";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        const productService = new ProductService();
        
        productService.getProductsByCategory(`women%20clothing`).then((data) =>
            this.setState({
                ...this.state,
                products: data,
            })
        );
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <Jumbotron>
                        <Header title="Tu Tienda Femenina!" />
                        <Lead parrafo="Primer e-comerce de ropa femenina de la región NEA" />
                        <Paragraph parrafo="Camperas, Blusas, Estilo Casual y más ..." />

                    </Jumbotron>
                    <CardContainer>
                        <Header1 title="Productos" />
                        <CardList products={this.state.products} />
                    </CardContainer>
                </div>
            </>
        );
    }
}

export default App;
