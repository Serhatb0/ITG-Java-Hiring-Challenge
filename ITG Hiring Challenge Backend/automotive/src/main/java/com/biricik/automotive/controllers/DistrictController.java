package com.biricik.automotive.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.DistrictService;
import com.biricik.automotive.business.responses.addressResponses.FindByCityIdDistrictResponse;

@RestController
@RequestMapping("/api/v1")
public class DistrictController {
	
	private final DistrictService districtService;

	public DistrictController(DistrictService districtService) {
		this.districtService = districtService;
	}
	
	
	
	@GetMapping("/districts/findByCityId")
	public List<FindByCityIdDistrictResponse> findByCityId(@RequestParam int cityId){
		
		return districtService.findByCityId(cityId);
		
	}
	
	
	
	
	

}