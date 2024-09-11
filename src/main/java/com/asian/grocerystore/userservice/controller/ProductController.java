package com.asian.grocerystore.userservice.controller;

import com.asian.grocerystore.userservice.model.Product;
import com.asian.grocerystore.userservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Endpoint to get all products
    @GetMapping()
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // Endpoint to get a product by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // Endpoint to get products by product category
    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }
}
