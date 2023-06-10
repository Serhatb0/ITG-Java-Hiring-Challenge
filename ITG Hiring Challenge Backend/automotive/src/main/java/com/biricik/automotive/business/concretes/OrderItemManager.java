package com.biricik.automotive.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.OrderItemService;
import com.biricik.automotive.model.OrderItem;
import com.biricik.automotive.repository.OrderItemRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderItemManager implements OrderItemService {

	
	private final OrderItemRepository orderItemRepository;
	
	
	public OrderItemManager(OrderItemRepository orderItemRepository) {
		this.orderItemRepository = orderItemRepository;
	}



	@Transactional
	@Override
	public List<OrderItem> addOrderItem(List<OrderItem> orderItems) {
		return orderItemRepository.saveAll(orderItems);
	}




	@Override
	public List<Integer> findTopFiveProductIds() {
		return orderItemRepository.findTopFiveProductIds();
	}




	@Override
	public List<Integer> findNewOrderFiveProductIds() {
		return orderItemRepository.findNewFiveProductIds();
	}

	
}
