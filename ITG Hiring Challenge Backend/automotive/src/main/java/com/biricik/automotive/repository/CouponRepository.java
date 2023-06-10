package com.biricik.automotive.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Coupon;


public interface CouponRepository  extends JpaRepository<Coupon, Integer>{
	
	
	Optional<Coupon> findByCode(String code);

}
