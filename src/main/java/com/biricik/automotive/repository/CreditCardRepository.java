package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.CreditCard;

public interface CreditCardRepository extends JpaRepository<CreditCard, Integer> {
	
	
	List<CreditCard> findByUserId(int userId);

}
