package com.biricik.automotive.business.responses.couponResponses;

import java.math.BigDecimal;
import java.util.List;

import com.biricik.automotive.business.responses.shoppingCartResponses.ShoppingCartItemDto;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class CouponApplyResponse {

	private BigDecimal totalAmount;
	private BigDecimal discountedTotalAmount;

	List<ShoppingCartItemDto> shoppingCartItemDtos;
}
