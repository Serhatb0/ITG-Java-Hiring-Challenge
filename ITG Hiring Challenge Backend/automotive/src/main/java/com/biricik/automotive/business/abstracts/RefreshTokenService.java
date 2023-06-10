package com.biricik.automotive.business.abstracts;

import java.util.Optional;

import com.biricik.automotive.model.RefreshToken;

public interface RefreshTokenService {


	Optional<RefreshToken> findByToken(String token);
	

	
	int deleteByUserId(int userId);
	
	RefreshToken verifyExpiration(RefreshToken token);

	RefreshToken createRefreshToken(int id);


}
