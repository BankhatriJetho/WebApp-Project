package com.asian.grocerystore.userservice.service;

import com.asian.grocerystore.userservice.model.Order;
import com.asian.grocerystore.userservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

//    @Autowired
//    private OrderRepository orderRepository;
//
//    public List<Order> getOrders() {
//        return orderRepository.findAll();
//    }
//
//    public Order saveOrder(Order order) {
//        return orderRepository.save(order);
//    }
//
//    public void updateOrderStatus(Long id, String status) {
//        Order order = orderRepository.findById(id).orElse(null);
//        if (order != null) {
//            order.setStatus(status);
//            orderRepository.save(order);
//        }
//    }
//
//    public void deleteOrder(Long id) {
//        orderRepository.deleteById(id);
//    }
}
