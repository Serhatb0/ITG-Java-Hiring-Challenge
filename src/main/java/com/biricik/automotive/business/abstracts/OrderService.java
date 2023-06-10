package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.orderRequest.CreateOrderRequest;
import com.biricik.automotive.business.responses.orderResponses.FindByCustomerIdOrderResponse;
import com.biricik.automotive.business.responses.orderResponses.FindByIdOrderResponse;



public interface OrderService {
	
	
	public int createOrder(CreateOrderRequest createOrderRequest,String discountCode);

	public List<FindByCustomerIdOrderResponse> findByCustomerId(int customerId);

	public FindByIdOrderResponse findById(int id);
	


}
