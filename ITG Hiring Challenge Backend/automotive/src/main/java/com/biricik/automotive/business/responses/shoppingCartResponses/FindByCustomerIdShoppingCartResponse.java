package com.biricik.automotive.business.responses.shoppingCartResponses;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FindByCustomerIdShoppingCartResponse {
	

	private int id;
	private BigDecimal totalAmount;
	private BigDecimal discountedTotalAmount;

	List<ShoppingCartItemDto> shoppingCartItemDtos;


}
