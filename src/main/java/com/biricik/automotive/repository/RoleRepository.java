package com.biricik.automotive.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.ERole;
import com.biricik.automotive.model.Role;



public interface RoleRepository extends JpaRepository<Role, Integer>{

	Optional<Role>  findByName(ERole role);

}
