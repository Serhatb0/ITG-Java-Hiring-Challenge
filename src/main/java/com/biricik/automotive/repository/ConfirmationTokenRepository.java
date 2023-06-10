package com.biricik.automotive.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.EmailConfirmationToken;


public interface ConfirmationTokenRepository extends JpaRepository<EmailConfirmationToken, Integer> {

	Optional<EmailConfirmationToken> findByConfirmationToken(String confirmationToken);
	
	
}
