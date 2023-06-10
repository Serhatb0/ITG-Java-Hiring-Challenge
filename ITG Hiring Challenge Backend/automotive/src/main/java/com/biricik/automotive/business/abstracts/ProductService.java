package com.biricik.automotive.business.abstracts;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.biricik.automotive.business.requests.productRequest.AddImageForProductRequest;
import com.biricik.automotive.business.requests.productRequest.CreateProductRequest;
import com.biricik.automotive.business.responses.PaginatedGenericResponse;
import com.biricik.automotive.business.responses.productResponses.AddImageForProductResponse;
import com.biricik.automotive.business.responses.productResponses.CreateProductReponse;
import com.biricik.automotive.business.responses.productResponses.FindByBrandIdProductResponse;
import com.biricik.automotive.business.responses.productResponses.FindByCategoryIdProductResponse;
import com.biricik.automotive.business.responses.productResponses.FindByIdProductResponse;
import com.biricik.automotive.business.responses.productResponses.FindNewProductResponse;
import com.biricik.automotive.business.responses.productResponses.FindTopFiveProductResponse;
import com.biricik.automotive.business.responses.productResponses.GetAllProductResponse;


public interface ProductService {

	public CreateProductReponse addProduct(CreateProductRequest createProductRequest,MultipartFile file);
	
	
	public AddImageForProductResponse addImageForProduct(AddImageForProductRequest addImageForProductRequest,MultipartFile file);
	
	public  PaginatedGenericResponse<GetAllProductResponse> getAll(String keyword,int size,int page , BigDecimal minPrice, BigDecimal maxPrice,  Optional<String> sortDirection);
	
	public PaginatedGenericResponse<FindByBrandIdProductResponse> findByBrandId(String keyword,int brandId,int size,int page , 
			BigDecimal minPrice, BigDecimal maxPrice, Optional<String> sortDirection);
	
	public FindByIdProductResponse findById(int productId);


	public PaginatedGenericResponse<FindByCategoryIdProductResponse> findByCategoryId(String keyword, int categoryId,
		int size,int page, BigDecimal minPrice, BigDecimal maxPrice,  Optional<String> sortDirection); 
	
	
	public void changeProductQuantity(int shoppingCartId);
	
	
	
	public List<FindTopFiveProductResponse> findTopFiveProduct();


	public List<FindNewProductResponse> findNewProduct();
	
	public List<FindNewProductResponse> findNewOrderFiveProduct();
	

}
