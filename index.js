// Sample JavaScrip Object
const dataObject = {
    user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: {
            city: "New York",
            zipcode: "10001"
        }
    },

    product: {
        id: 101,
        name: "Laptop",
        price: 999.99
    }
};

// Use stringify to convert data into a JSON string
let stringifyData = JSON.stringify(dataObject);

// Log JSON string onto console
console.log(stringifyData);
