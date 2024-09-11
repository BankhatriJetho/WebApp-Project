package com.asian.grocerystore.userservice.repository;

import com.asian.grocerystore.userservice.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    //No user-specific queries since user account/registration is not implemented.

}
