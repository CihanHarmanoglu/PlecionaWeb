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
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick = "editProduct(${product.id})">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}
//Add product
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

    try {

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

            const errorData = await response.json();
            alert("Failed to add product: " + errorData.message);
        }
    } catch (error) {

        alert("An error occurred while adding the product: " + error.message);
    }
}


const productForm = document.getElementById("product-form");
if (productForm) {
    productForm.addEventListener("submit", addProduct);
}


//Update product
async function editProduct(id) {
    const newName = prompt("Enter new name:");
    const newDescription = prompt ("Enter new description");
    const newPrice = prompt ("Enter new price");

    const updatedProduct = {
    name: newName,
    description: newDescription,
    price: newPrice,
    };

    const response = await fetch('http://localhost:8080/products/${id}' , {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify(updatedProduct),

    });

   if (response.ok){
        alert("Product updated successfully!");
        fetchProducts(); //Updated new list
    } else {
        alert("Failed to update product. Please try again.")
    }
}

async function deleteProduct(id) {
    const confirmDelete = confirm ("Are you sure you want to delete this product?");
    if(confirmDelete) {
        const response = await fetch ('http://localhost:8080/products/${id}' , {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Product deleted successfully!");
            fetchProducts();
        } else {
            alert("Failed to delete product. Please try again");
        }
    }
}

fetchProducts();
