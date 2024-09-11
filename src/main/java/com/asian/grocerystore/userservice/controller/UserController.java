package com.asian.grocerystore.userservice.controller;

import com.asian.grocerystore.userservice.model.User;
import com.asian.grocerystore.userservice.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
@Validated
public class UserController {
    // no user related Implementation
}