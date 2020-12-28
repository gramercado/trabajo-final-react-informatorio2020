import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/products';


export default class ProductService {
    
    async getProductsByCategory(category) {
        const url = `/category/${category}`;
        const response = await axios.get(url);

        return response.data;
    }

    
}
