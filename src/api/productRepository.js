import axios from 'axios';

export class ProductsRepository {
    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "psun"
        }
    };

    // get data from backend api for product with id of id
    getProduct(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    };

    getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    };
}