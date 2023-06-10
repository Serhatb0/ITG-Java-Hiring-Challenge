package com.biricik.automotive.business.concretes;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.RefreshTokenService;
import com.biricik.automotive.config.AppProperties;
import com.biricik.automotive.exception.TokenRefreshException;
import com.biricik.automotive.model.RefreshToken;
import com.biricik.automotive.repository.RefreshTokenRepository;
import com.biricik.automotive.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class RefreshTokenManager implements RefreshTokenService {

	private final AppProperties appProperties;

	private final RefreshTokenRepository refreshTokenRepository;

	private final UserRepository userRepository;

	@Autowired
	public RefreshTokenManager(AppProperties appProperties, RefreshTokenRepository refreshTokenRepository,
			UserRepository userRepository) {
		this.appProperties = appProperties;
		this.refreshTokenRepository = refreshTokenRepository;
		this.userRepository = userRepository;
	}

	@Override
	public Optional<RefreshToken> findByToken(String token) {
		return refreshTokenRepository.findByToken(token);
	}

	@Transactional
	@Override
	public RefreshToken createRefreshToken(int id) {

		RefreshToken refreshToken = new RefreshToken();

		refreshToken.setUser(userRepository.findById(id).get());
		refreshToken.setExpiryDate(Instant.now().plusMillis(appProperties.getAuth().getJwtRefreshExpirationMs()));
		refreshToken.setToken(UUID.randomUUID().toString());
		return refreshTokenRepository.save(refreshToken);
	}

	@Override
	public RefreshToken verifyExpiration(RefreshToken token) {
		if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
			refreshTokenRepository.delete(token);
			throw new TokenRefreshException(token.getToken(),
					"Refresh token was expired. please make a new signin request");

		}
		return token;
	}

	@Transactional
	@Override
	public int deleteByUserId(int userId) {
		return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
	}



}