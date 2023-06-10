package com.biricik.automotive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	Customer findByUsername(String userName);
	
	Customer findByEmail(String email);

}
