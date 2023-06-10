package com.biricik.automotive.business.requests.addressRequest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateAddressRequest {

	@NotNull
	private int customerId;
	@NotNull
	private int districtId;
	@NotNull
	private int cityId;
	@NotBlank
	private String fullAddress;
	@NotBlank
	private String addressTitle;
	@NotBlank
	private String phoneNumber;
	@NotBlank
	private String identityNumber;
}
