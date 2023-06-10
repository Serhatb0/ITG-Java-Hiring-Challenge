package com.biricik.automotive.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.ShoppingCart;


public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer>{

	
	Optional<ShoppingCart> findByCustomerId(int customerId);
	

 }
