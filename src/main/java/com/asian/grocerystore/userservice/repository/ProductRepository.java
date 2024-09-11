package com.asian.grocerystore.userservice.repository;

import com.asian.grocerystore.userservice.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //Custom query to find products by category
    List<Product> findByCategory(String category);

}
