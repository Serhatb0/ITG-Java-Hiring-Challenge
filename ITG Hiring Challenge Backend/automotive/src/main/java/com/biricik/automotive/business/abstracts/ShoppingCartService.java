package com.biricik.automotive.business.abstracts;

import com.biricik.automotive.business.requests.couponRequest.CouponApplyRequest;
import com.biricik.automotive.business.requests.shoppingCartRequest.CreateShoppingCartRequest;
import com.biricik.automotive.business.responses.couponResponses.CouponApplyResponse;
import com.biricik.automotive.business.responses.shoppingCartResponses.CreateShoppingCartResponse;
import com.biricik.automotive.business.responses.shoppingCartResponses.FindByCustomerIdShoppingCartResponse;
import com.biricik.automotive.model.ShoppingCart;
import com.biricik.automotive.model.ShoppingCartItem;

public interface ShoppingCartService {

	public CreateShoppingCartResponse addShoppingCart(CreateShoppingCartRequest createShoppingCartRequest);
	
	public CouponApplyResponse applyCouponForShoppingCart(CouponApplyRequest couponApplyRequest);
	
	public FindByCustomerIdShoppingCartResponse findByCustomerId(int customerId);
	
	public ShoppingCart findById(int id);
	
	public void updatedShoppingCart(int customerId, ShoppingCartItem shoppingCartItem);
	
	public void updatedShoppingCart(ShoppingCart shoppingCart);

	

	
}
