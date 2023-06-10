package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.model.OrderItem;

public interface OrderItemService {

	
	public List<OrderItem>  addOrderItem(List<OrderItem> orderItems);

	
	public List<Integer> findTopFiveProductIds();
	

	public List<Integer> findNewOrderFiveProductIds();

}
