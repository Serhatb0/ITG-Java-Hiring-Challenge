package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.biricik.automotive.model.OrderItem;


public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

	@Query(value = "SELECT product_id, COUNT(product_id) as count FROM order_items GROUP BY product_id ORDER BY count DESC LIMIT 4", nativeQuery = true)
	List<Integer> findTopFiveProductIds();

	
	@Query(value = "SELECT ORDER_ITEMS.product_id FROM ORDER_ITEMS ORDER BY CREATED_DATE DESC LIMIT 4", nativeQuery = true)
	List<Integer> findNewFiveProductIds();
}
