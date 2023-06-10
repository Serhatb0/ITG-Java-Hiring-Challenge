package com.biricik.automotive.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.City;

public interface CityRepository  extends JpaRepository<City, Integer>{
	
	
	List<City> findByCountryId(int countryId);

}
