package com.biricik.automotive.business.concretes;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.BrandService;
import com.biricik.automotive.business.abstracts.CategoryService;
import com.biricik.automotive.business.requests.categoryRequest.CreateCategoryRequest;
import com.biricik.automotive.business.responses.categoryResponses.CreateCategoryResponse;
import com.biricik.automotive.business.responses.categoryResponses.GetAllCategoryResponse;
import com.biricik.automotive.business.responses.categoryResponses.GetByIdCategoryResponse;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.Brand;
import com.biricik.automotive.model.Category;
import com.biricik.automotive.repository.CategoryRepository;

import jakarta.transaction.Transactional;

@Service
public class CategoryManager implements CategoryService {

	public final CategoryRepository categoryRepository;
	public final ModelMapperService modelMapperService;
	public final BrandService brandService;

	public CategoryManager(CategoryRepository categoryRepository, ModelMapperService modelMapperService,
			BrandService brandService) {
		this.categoryRepository = categoryRepository;
		this.modelMapperService = modelMapperService;
		this.brandService = brandService;

	}

	@Transactional
	@Override
	public CreateCategoryResponse addCategory(CreateCategoryRequest createCategoryRequest) {

		Brand brand = brandService.findById(createCategoryRequest.getBrandId());

		Category category = modelMapperService.forRequest().map(createCategoryRequest, Category.class);
		category.setId(0);
		brand.getCategories().add(category);
		category.getBrands().add(brand);

		categoryRepository.save(category);
		
		
		CreateCategoryResponse response = modelMapperService.forResponse().map(category, CreateCategoryResponse.class);
		response.setBrandName(brand.getName());
		return response;

	}

	@Override
	public List<GetAllCategoryResponse> getAll() {

		List<Category> categories = this.categoryRepository.findAll();

		List<GetAllCategoryResponse> getAllCategoryResponses = categories.stream()
				.map(category -> modelMapperService.forResponse().map(category, GetAllCategoryResponse.class))
				.collect(Collectors.toList());

		return getAllCategoryResponses;
	}

	@Override
	public GetByIdCategoryResponse getById(int categoryId) {
		Category category = this.categoryRepository.findById(categoryId).orElse(null);

		return modelMapperService.forResponse().map(category, GetByIdCategoryResponse.class);

	}

}