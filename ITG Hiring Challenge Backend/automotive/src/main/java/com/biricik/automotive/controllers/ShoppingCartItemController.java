package com.biricik.automotive.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.ShoppingCartItemService;

@RestController
@RequestMapping("/api/v1")
public class ShoppingCartItemController {

	private final ShoppingCartItemService shoppingCartItemService;

	public ShoppingCartItemController(ShoppingCartItemService shoppingCartItemService) {
		this.shoppingCartItemService = shoppingCartItemService;
	}

	
	@PreAuthorize("hasRole('USER')")
	@DeleteMapping("/shopping-cart-items")
	public void deleteShoppingCartItem(@RequestParam int shoppingCartItemId) {
		this.shoppingCartItemService.deleteShoppingCartItem(shoppingCartItemId);
	}
}
