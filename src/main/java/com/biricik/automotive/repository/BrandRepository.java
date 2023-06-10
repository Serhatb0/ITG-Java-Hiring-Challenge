package com.biricik.automotive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Brand;


public interface BrandRepository extends  JpaRepository<Brand, Integer>{
	
	
	List<Brand> findByCategoriesId(int categoryName);


}
