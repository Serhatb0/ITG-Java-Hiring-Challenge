package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.responses.addressResponses.GetAllCountryResponse;

public interface CountryService {

	List<GetAllCountryResponse> getAll();

}
