package com.biricik.automotive.business.requests.shoppingCartRequest;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateShoppingCartRequest {

	@NotNull
	private int customerId;
	@NotNull
	private int productId;
	@NotNull
	private int quantity;
	

	
}
