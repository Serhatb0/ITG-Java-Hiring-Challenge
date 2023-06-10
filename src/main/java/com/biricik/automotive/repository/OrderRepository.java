package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Order;


public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	
	List<Order> findByCustomerId(int id);
	


}
