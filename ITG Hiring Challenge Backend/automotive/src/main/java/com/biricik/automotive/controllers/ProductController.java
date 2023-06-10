package com.biricik.automotive.controllers;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.biricik.automotive.business.abstracts.ProductService;
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

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

	public final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping("/products")
	public PaginatedGenericResponse<GetAllProductResponse> getAllProducts(
			@RequestParam(required = false) String keyword, @RequestParam(defaultValue = "20") int size,
			@RequestParam(defaultValue = "0") int page, @RequestParam(required = false) BigDecimal minPrice,
			@RequestParam(required = false) BigDecimal maxPrice,
			@RequestParam(required = false) Optional<String> sortDirection) {

		return this.productService.getAll(keyword, size, page, minPrice, maxPrice, sortDirection);

	}

	@GetMapping("/products/findById")
	public FindByIdProductResponse findById(@RequestParam int id) {
		return this.productService.findById(id);
	}

	@GetMapping("/products/findByBrandId")
	public PaginatedGenericResponse<FindByBrandIdProductResponse> findByBrandId(@RequestParam int brandId,
			@RequestParam(defaultValue = "20") int size, @RequestParam(defaultValue = "0") int page,
			@RequestParam(required = false) String keyword, @RequestParam(required = false) BigDecimal minPrice,
			@RequestParam(required = false) BigDecimal maxPrice,
			@RequestParam(required = false) Optional<String> sortDirection) {

		return this.productService.findByBrandId(keyword, brandId, size, page, minPrice, maxPrice, sortDirection);

	}

	@GetMapping("/products/findByCategoryId")
	public PaginatedGenericResponse<FindByCategoryIdProductResponse> findByCategoryId(@RequestParam int categoryId,
			@RequestParam(defaultValue = "20") int size, @RequestParam(defaultValue = "0") int page,
			@RequestParam(required = false) String keyword, @RequestParam(required = false) BigDecimal minPrice,
			@RequestParam(required = false) BigDecimal maxPrice,
			@RequestParam(required = false) Optional<String> sortDirection) {

		return this.productService.findByCategoryId(keyword, categoryId, size, page, minPrice, maxPrice, sortDirection);

	}

	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping(value = "/products")
	public CreateProductReponse addProduct(@RequestPart("file") MultipartFile file,
			@RequestPart("createProductRequest") CreateProductRequest createProductRequest) {

		return this.productService.addProduct(createProductRequest, file);
	}

	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/products/image")
	public AddImageForProductResponse addImageForProduct(
			@RequestPart("addImageForProductRequest") @Valid AddImageForProductRequest addImageForProductRequest,
			@RequestPart("file") MultipartFile file) {

		return this.productService.addImageForProduct(addImageForProductRequest, file);
	}
	
	
	@GetMapping("/products/findTopFiveProduct")
	public List<FindTopFiveProductResponse> findTopFiveProduct() {
		return this.productService.findTopFiveProduct();
	}
	
	
	
	@GetMapping("/products/findNewProduct")
	public List<FindNewProductResponse> findNewProduct() {
		return this.productService.findNewProduct();
	}
	
	@GetMapping("/products/findNewOrderFiveProduct")
	public List<FindNewProductResponse> findNewOrderFiveProduct() {
		return this.productService.findNewOrderFiveProduct();
	}
	

}
