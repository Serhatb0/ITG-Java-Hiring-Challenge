package com.biricik.automotive.business.concretes;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CountryService;
import com.biricik.automotive.business.responses.addressResponses.GetAllCountryResponse;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.Country;
import com.biricik.automotive.repository.CountryRepository;


@Service
public class CountryManager implements CountryService {

	private final CountryRepository countryRepository;
	private final ModelMapperService modelMapperService;

	public CountryManager(CountryRepository countryRepository, ModelMapperService modelMapperService) {

		this.countryRepository = countryRepository;
		this.modelMapperService = modelMapperService;
	
	}

	@Override
	public List<GetAllCountryResponse> getAll() {

		List<Country> countries = countryRepository.findAll();

		List<GetAllCountryResponse> response = countries.stream().map(country -> modelMapperService
				.forResponse().map(country, GetAllCountryResponse.class)).collect(Collectors.toList());

		return response;

	}

}
