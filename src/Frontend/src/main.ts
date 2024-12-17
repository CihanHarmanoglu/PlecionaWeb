async function fetchProducts() {
    const response = await fetch("http://localhost:8080/products");
    const products = await response.json();
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.innerHTML = "";
        products.forEach((product: { name: string; description: string; price: number }) => {
            const productDiv = document.createElement("div");
            productDiv.classList.ad("product")
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    }
}
async function addProduct(event: Event) {
    event.preventDefault();

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const decriptionInput = document.getElementById("description") as HTMLInputElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;

    const Product = {
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
        alert("Product added succesfully!");
        nameInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";

        fetchProducts();
    } else {
        aler("Failed to add product. Please try again.");
    }
}

const ProductForm = document.getElementById("product-form");
if(productForm) {
    productForm.addEventListener("submit",addProduct);
}

fetchProducts();
