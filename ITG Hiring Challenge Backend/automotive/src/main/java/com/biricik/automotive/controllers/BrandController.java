package com.biricik.automotive.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.BrandService;
import com.biricik.automotive.business.requests.brandRequest.CreateBrandRquest;
import com.biricik.automotive.business.responses.brandResponses.CreateBrandResponse;
import com.biricik.automotive.business.responses.brandResponses.FindBrandByCategoryIdResponse;


@RestController
@RequestMapping("/api/v1")
public class BrandController {

	private final BrandService brandService;

	public BrandController(BrandService brandService) {
		this.brandService = brandService;
	}
 
	@GetMapping("/brands/findByCategoryId")
	public List<FindBrandByCategoryIdResponse> findByCategoryId(@RequestParam int categoryId) {
		return brandService.findByCategoryId(categoryId);

	};
	
	@PostMapping("/brands")
	public CreateBrandResponse addBrand(@RequestBody CreateBrandRquest createBrandRequest) {
		return brandService.addBrand(createBrandRequest);
	}

}