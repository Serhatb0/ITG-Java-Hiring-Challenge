package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.model.ShoppingCartItem;

public interface ShoppingCartItemService {

	public ShoppingCartItem addShoppingCartItemService(ShoppingCartItem shoppingCartItem);

	public ShoppingCartItem updateShoppingCartItemService(ShoppingCartItem shoppingCartItem);
	
	public List<ShoppingCartItem> findByCustomerId(int customerId);

	public void deleteShoppingCartItem(int shoppingCartItemId);
	
	public void resetShoppingCartItem(int shoppingCartId);
}
