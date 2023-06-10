package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.categoryRequest.CreateCategoryRequest;
import com.biricik.automotive.business.responses.categoryResponses.CreateCategoryResponse;
import com.biricik.automotive.business.responses.categoryResponses.GetAllCategoryResponse;
import com.biricik.automotive.business.responses.categoryResponses.GetByIdCategoryResponse;

public interface CategoryService {

	public CreateCategoryResponse addCategory(CreateCategoryRequest createCategoryRequest) ;
	
	public List<GetAllCategoryResponse> getAll();

	public GetByIdCategoryResponse getById(int categoryId);
}
