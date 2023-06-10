package com.biricik.automotive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Country;


public interface CountryRepository extends JpaRepository<Country, Integer> {

}
