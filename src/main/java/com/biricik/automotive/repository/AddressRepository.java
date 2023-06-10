package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Address;


public interface AddressRepository extends JpaRepository<Address, Integer> {

	List<Address> findByUserId(int customerId);

}
