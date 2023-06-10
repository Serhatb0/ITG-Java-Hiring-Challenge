package com.biricik.automotive.business.responses.authResponses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RefreshTokenResponse {
	private String accessToken;
	private String refereshToken;
	private Long accessTokenExpiry;
}
