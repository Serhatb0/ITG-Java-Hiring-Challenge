package com.biricik.automotive.business.concretes;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CargoService;
import com.biricik.automotive.business.abstracts.OrderService;
import com.biricik.automotive.business.abstracts.ShoppingCartService;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.Cargo;
import com.biricik.automotive.model.CargoStatus;
import com.biricik.automotive.model.Order;
import com.biricik.automotive.model.ShoppingCart;
import com.biricik.automotive.repository.CargoRepository;

import jakarta.transaction.Transactional;

@Service
public class CargoManager implements CargoService {

	private final CargoRepository cargoRepository;
	private final ShoppingCartService shoppingCartService;
	private final OrderService orderService;
	private final ModelMapperService modelMapperService;

	public CargoManager(ShoppingCartService shoppingCartService, OrderService orderService,
			ModelMapperService modelMapperService, CargoRepository cargoRepository) {
		this.cargoRepository = cargoRepository;
		this.shoppingCartService = shoppingCartService;
		this.orderService = orderService;
		this.modelMapperService = modelMapperService;
	}

	@Transactional
	@Override
	public void createCargo(int shoppingCartId, int orderId) {

		ShoppingCart shoppingCart = shoppingCartService.findById(shoppingCartId);
		Order order = modelMapperService.forRequest().map(orderService.findById(orderId), Order.class);

		Cargo cargo = new Cargo();

		cargo.setCargoStatus(CargoStatus.PREPARING);
		cargo.setOrder(order);
		cargo.setCustomer(shoppingCart.getCustomer());
		cargo.setDeliveryDate(new Date());
		cargo.setShippingTrackingNo(UUID.randomUUID().toString());
		
		cargoRepository.save(cargo);

	}

}
