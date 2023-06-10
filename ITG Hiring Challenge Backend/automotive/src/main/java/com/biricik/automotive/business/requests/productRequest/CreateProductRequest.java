package com.biricik.automotive.business.requests.productRequest;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateProductRequest {

	@NotBlank
	private String name;

	@NotBlank
	private String description;

	@NotBlank
	private BigDecimal price;
	@NotNull
	private int quantity;
	@NotNull
	private int categoryId;
	@NotNull
	private int brandId;

}
