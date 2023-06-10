package com.biricik.automotive.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.CityService;
import com.biricik.automotive.business.responses.addressResponses.FindByCountryIdCityResponse;

@RestController
@RequestMapping("/api/v1")

public class CityController {

	private final CityService cityService;

	public CityController(CityService cityService) {

		this.cityService = cityService;
	}

	@GetMapping("/cities/findByCountryId")
	public List<FindByCountryIdCityResponse> findByCountryId(@RequestParam int countryId) {

		return cityService.findByCountryId(countryId);

	}

}
