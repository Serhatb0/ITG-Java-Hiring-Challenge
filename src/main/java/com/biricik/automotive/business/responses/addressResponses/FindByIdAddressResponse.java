package com.biricik.automotive.business.responses.addressResponses;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class FindByIdAddressResponse {

	
	
	private int id;
	
	private int cityId;

	private int countryId;

	private int districtId;

	private String postalCode;

	private String fullAddress;
	
	private String addressTitle;

	private String phoneNumber;

	private String identityNumber;
}
