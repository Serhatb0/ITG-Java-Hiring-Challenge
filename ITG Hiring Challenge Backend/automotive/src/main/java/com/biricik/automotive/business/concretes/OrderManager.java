package com.biricik.automotive.business.concretes;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CouponService;
import com.biricik.automotive.business.abstracts.OrderItemService;
import com.biricik.automotive.business.abstracts.OrderService;
import com.biricik.automotive.business.abstracts.ShoppingCartService;
import com.biricik.automotive.business.requests.orderRequest.CreateOrderRequest;
import com.biricik.automotive.business.responses.orderResponses.FindByCustomerIdOrderResponse;
import com.biricik.automotive.business.responses.orderResponses.FindByIdOrderResponse;
import com.biricik.automotive.business.responses.productResponses.GetAllProductResponse;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.Customer;
import com.biricik.automotive.model.Image;
import com.biricik.automotive.model.Order;
import com.biricik.automotive.model.OrderItem;
import com.biricik.automotive.model.OrderStatus;
import com.biricik.automotive.model.Product;
import com.biricik.automotive.model.ShoppingCart;
import com.biricik.automotive.model.ShoppingCartItem;
import com.biricik.automotive.repository.OrderRepository;
import com.biricik.automotive.util.MethodUtils;

import jakarta.transaction.Transactional;

@Service
public class OrderManager implements OrderService {

	private final OrderRepository orderRepository;
	private final ShoppingCartService shoppingCartService;
	private final ModelMapperService modelMapperService;
	private final OrderItemService orderItemService;
	private final CouponService couponService;

	@Lazy
	public OrderManager(OrderRepository orderRepository, ShoppingCartService shoppingCartService,
			CouponService couponService, OrderItemService orderItemService, ModelMapperService modelMapperService) {
		this.orderRepository = orderRepository;
		this.shoppingCartService = shoppingCartService;
		this.modelMapperService = modelMapperService;
		this.orderItemService = orderItemService;
		this.couponService = couponService;

	}

	@Transactional
	@Override
	public int createOrder(CreateOrderRequest createOrderRequest, String discountCode) {

		ShoppingCart shoppingCart = shoppingCartService.findById(createOrderRequest.getShoppingCartId());
		List<ShoppingCartItem> shoppingCartItems = shoppingCart.getShoppingCartItems();

		List<OrderItem> orderItems = new ArrayList<>();
		Customer customer = shoppingCart.getCustomer();

		Order order = Order.builder().customer(customer).orderItems(orderItems).orderStatus(OrderStatus.PREPARING)
				.totalAmount(shoppingCart.getTotalAmount()).orderDate(MethodUtils.getCurrentTimeStamp()).build();

		if (discountCode != null) {
			order.setCoupon(couponService.findByCode(discountCode));
		}
		orderRepository.save(order);
		for (ShoppingCartItem shoppingCartItem : shoppingCartItems) {
			orderItems.add(OrderItem.builder().product(shoppingCartItem.getProduct()).order(order)
					.quantity(shoppingCartItem.getQuantity()).price(shoppingCartItem.getProduct().getPrice()
							.multiply(BigDecimal.valueOf(shoppingCartItem.getQuantity())))
					.build());

		}

		orderItemService.addOrderItem(orderItems);
		orderRepository.save(order);
		
		return order.getId();

	}

	@Override
	public List<FindByCustomerIdOrderResponse> findByCustomerId(int customerId) {

		List<Order> orders = this.orderRepository.findByCustomerId(customerId);

		List<FindByCustomerIdOrderResponse> responses = orders.stream()
				.map(order -> modelMapperService.forResponse().map(order, FindByCustomerIdOrderResponse.class))
				.collect(Collectors.toList());

		responses.stream().forEach(response -> {

			Order order = orders.stream().filter(o -> o.getId() == response.getId()).findFirst().orElse(null);

			if (order != null && order.getCoupon() != null) {
				BigDecimal discountTotalAmount = response.getTotalAmount().subtract(response.getTotalAmount()
						.multiply(order.getCoupon().getDiscount()).divide(BigDecimal.valueOf(100)));

				response.setDiscountTotalAmount(discountTotalAmount);
			} else {
				response.setDiscountTotalAmount(response.getTotalAmount());
			}

		});

		return responses;

	}

	@Override
	public FindByIdOrderResponse findById(int id) {

		Order order = orderRepository.findById(id).get();

		List<Product> products = order.getOrderItems().stream().map(item -> item.getProduct())
				.collect(Collectors.toList());

		List<GetAllProductResponse> getAllProductResponse = products.stream()
				.map(product -> modelMapperService.forResponse().map(product, GetAllProductResponse.class))
				.collect(Collectors.toList());

		getAllProductResponse.stream().peek(response -> {
			List<String> urls = products.stream().filter(product -> product.getId() == response.getId())
					.flatMap(product -> product.getImages().stream().map(Image::getUrl)).collect(Collectors.toList());
			response.setUrl(urls);
		}).collect(Collectors.toList());

		FindByIdOrderResponse responses = modelMapperService.forResponse().map(order, FindByIdOrderResponse.class);
		responses.setGetAllProductResponses(getAllProductResponse);

		return responses;

	}

}
