package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.ShoppingCartItem;



public interface ShoppingCartItemRepository extends JpaRepository<ShoppingCartItem, Integer> {
	

	List<ShoppingCartItem> findByShoppingCartCustomerId(int customerId);
	
	
	
	
	
}
