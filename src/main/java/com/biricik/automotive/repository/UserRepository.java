package com.biricik.automotive.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);

	Optional<User> findByEmailIgnoreCase(String email);
	
	
	Optional<User> findByEmail(String email);
	
	List<User> findByAccountNonLockedIsFalse();
	
	boolean existsByUsername(String userName);

	boolean existsByEmail(String email);

}
