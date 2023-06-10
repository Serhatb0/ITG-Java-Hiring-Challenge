package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.brandRequest.CreateBrandRquest;
import com.biricik.automotive.business.responses.brandResponses.CreateBrandResponse;
import com.biricik.automotive.business.responses.brandResponses.FindBrandByCategoryIdResponse;
import com.biricik.automotive.model.Brand;

public interface BrandService {

	
	
	List<FindBrandByCategoryIdResponse> findByCategoryId(int categoryID);

	Brand findById(int brandId);

	CreateBrandResponse addBrand(CreateBrandRquest createBrandRquest);
	
}
