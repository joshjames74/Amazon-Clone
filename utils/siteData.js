// Fetch Categories
export async function fetchData(name, callback) {
    const base_url = 'http://localhost:3000';
    const routes = {
        categories: '/api/categories'
    }
    const url = routes[name];
    const res = await fetch(base_url + url);
    const resJSON = res.json();
    callback(resJSON)
}

export async function getCategories(callback) {
    const base_url = 'http://localhost:3000';
    const route = '/api/categories'
    fetch(base_url + route)
        .then(res => res.json())
        .then(data => {
            if (!data) {
                callback({
                    message: 'No data returned',
                    success: false
                })
            } if (data.success) {
                callback({
                    // Specific index because categories are saved as one list
                    // Needs to be changed asap
                    message: data.message[0].categories,
                    success: true
                })
            } else {
                callback({
                    message: 'Unknown error',
                    success: false
                })
            }
        })
}

export async function getProduct(id, callback) {
    const base_url = 'http://localhost:3000';
    // Need to sanitize id
    const route = `/api/product?id=${id}`;
    fetch(base_url + route)
        .then(res => res.json())
        .then(data => {
            if (!data) {
                callback({
                    message: 'No data returned',
                    success: false
                })
            } if (data.success) {
                callback({
                    message: data.message,
                    success: true
                })
            } if (!data.success) {
                callback({
                    message: 'Unknown error',
                    success: false
                })
            }
        })
}

export async function getAllProducts(callback) {
    const base_url = 'http://localhost:3000';
    const route = '/api/product';
    fetch(base_url + route)
        .then(res => res.json())
        .then(data => {
            if (!data) {
                callback({
                    message: 'No data returned',
                    sucess: false,
                })
            } if (data.success) {
                callback({
                    message: data.message,
                    success: true
                })
            } if (!data.success) {
                callback({
                    message: 'Unknown error',
                    success: false
                })
            }
        })
}