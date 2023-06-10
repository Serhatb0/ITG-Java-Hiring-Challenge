package com.biricik.automotive.business.responses.shoppingCartResponses;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ShoppingCartItemDto {
	
	private int id;
	public String productName;
	public BigDecimal price;
	public BigDecimal totalPrice;
	public int quantity;


}