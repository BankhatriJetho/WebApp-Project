package com.asian.grocerystore.userservice.controller;

import com.asian.grocerystore.userservice.model.Order;
import com.asian.grocerystore.userservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
//****No logic needed since we are not handling user oder anymore****
//    @Autowired
//    private OrderService orderService;
//
//    @GetMapping
//    public List<Order> getOrdersByUserId(@PathVariable Long userId) {
//        return orderService.getOrdersByUserId(userId);
//    }
//
//    @PostMapping
//    public Order createOrder(@RequestBody Order order) {
//        return orderService.saveOrder(order);
//    }
//
//    @PutMapping("/{id}")
//    public void updateOrderStatus(@PathVariable Long id, @RequestBody String status) {
//        orderService.updateOrderStatus(id, status);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteOrder(@PathVariable Long id) {
//        orderService.deleteOrder(id);
//    }

}
