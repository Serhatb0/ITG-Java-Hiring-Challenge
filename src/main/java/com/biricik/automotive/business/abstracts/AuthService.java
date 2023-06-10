package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.authRequest.LoginRequest;
import com.biricik.automotive.business.requests.authRequest.RefreshTokenRequest;
import com.biricik.automotive.business.requests.authRequest.RegisterRequest;
import com.biricik.automotive.business.responses.authResponses.GetAllLockedAccountsResponse;
import com.biricik.automotive.business.responses.authResponses.LoginResponse;
import com.biricik.automotive.business.responses.authResponses.RefreshTokenResponse;

public interface AuthService {
	
	LoginResponse login(LoginRequest loginRequest);
	
	String registerUser(RegisterRequest registerRequest);
	
	public RefreshTokenResponse refershToken(RefreshTokenRequest refreshTokenRequest);
	
	
	public void accountLockedOpen(int userId);

	List<GetAllLockedAccountsResponse> getAllLockedAccounts();
}
