package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.responses.addressResponses.FindByCountryIdCityResponse;
import com.biricik.automotive.model.City;

public interface CityService {

	List<FindByCountryIdCityResponse> findByCountryId(int countryId);

	City findById(int cityId);

}
