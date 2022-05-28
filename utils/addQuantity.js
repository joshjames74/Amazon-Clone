import { getAllProducts } from './siteData.js';


// Add quantity parameter to every product
export default function addQuantity(max) {
    getAllProducts(res => {
        if (res.success) {
            res.message.forEach(v => {
                const random = Math.floor(Math.random() * max);
                const id = v._id;
                const base_url = 'http://localhost:3000';
                const route = '/api/product';
                fetch(base_url + route,
                    {
                        method: 'PUT',
                        body: {
                            id: id,
                            field: 'quantity',
                            value: random
                        }
                    })
            })
        }
    })
}