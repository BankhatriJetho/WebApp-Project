package com.asian.grocerystore.userservice.repository;

import com.asian.grocerystore.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
