package com.biricik.automotive.business.requests.orderRequest;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CreateOrderRequest {
	
	@NotNull
	private int shoppingCartId;

}
