package com.biricik.automotive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Cargo;



public interface CargoRepository  extends JpaRepository<Cargo, Integer> {

}
