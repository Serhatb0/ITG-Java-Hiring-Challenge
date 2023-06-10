package com.biricik.automotive.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.RefreshToken;
import com.biricik.automotive.model.User;



public interface RefreshTokenRepository  extends JpaRepository<RefreshToken, Integer>{

		Optional<RefreshToken> findByToken(String token);

		int deleteByUser(User user);
}
