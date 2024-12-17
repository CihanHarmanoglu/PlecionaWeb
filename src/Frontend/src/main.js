async function fetchProducts() {
    const response = await fetch("http://localhost:8080/products");
    const products = await response.json();
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.innerHTML = "";
        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    }
}

async function addProduct(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");

    const product = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: parseFloat(priceInput.value),
    };

    const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (response.ok) {
        alert("Product added successfully!");
        nameInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";
        fetchProducts();
    } else {
        alert("Failed to add product. Please try again.");
    }
}

const productForm = document.getElementById("product-form");
if (productForm) {
    productForm.addEventListener("submit", addProduct);
}

fetchProducts();
