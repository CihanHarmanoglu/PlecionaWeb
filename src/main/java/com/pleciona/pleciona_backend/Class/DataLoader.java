package com.pleciona.pleciona_backend.Class;

import com.pleciona.pleciona_backend.Model.Product;
import com.pleciona.pleciona_backend.Repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository=productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        productRepository.save(new Product(null, "Fishing Rod", "High-quality fishing rod" , 99.99));
        productRepository.save(new Product(null, "Fishing Net" , "Durable fishing net", 49.99));
        productRepository.save(new Product(null, "Bait", "Pack of live bait", 9.99));
    }

}
