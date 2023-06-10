package com.biricik.automotive.business.responses.orderResponses;

import java.math.BigDecimal;
import java.util.Date;

import com.biricik.automotive.model.OrderStatus;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FindByCustomerIdOrderResponse {

	private int id;
	
	private final String companyName = "BİRİCİK-TİCARET";
	
	private OrderStatus orderStatus;
	
	private BigDecimal totalAmount;
	
	private BigDecimal discountTotalAmount;
	
	private Date orderDate;
	
	
}
 