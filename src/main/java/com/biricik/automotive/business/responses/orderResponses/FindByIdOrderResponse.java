package com.biricik.automotive.business.responses.orderResponses;
import java.util.Date;
import java.util.List;

import com.biricik.automotive.business.responses.productResponses.GetAllProductResponse;
import com.biricik.automotive.model.OrderStatus;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FindByIdOrderResponse {

	private int id;

	private final String companyName = "BİRİCİK-OTOMOTİV";

	private OrderStatus orderStatus;

	private List<GetAllProductResponse> getAllProductResponses;

	private Date orderDate;

}
