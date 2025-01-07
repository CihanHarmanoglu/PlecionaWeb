package com.pleciona.pleciona_backend.Service;

import com.pleciona.pleciona_backend.Model.Product;
import com.pleciona.pleciona_backend.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
    // Method to delete a product by ID
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
    // Method to update a product by ID
    public Product updateProduct (Long id, Product updatedProduct) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(updatedProduct.getName());
                    product.setDescription(updatedProduct.getDescription());
                    product.setPrice(updatedProduct.getPrice());
                    return productRepository.save(product);
                })
                .orElseThrow(() -> new RuntimeException("Product not found with ID:" + id));
    }
}
