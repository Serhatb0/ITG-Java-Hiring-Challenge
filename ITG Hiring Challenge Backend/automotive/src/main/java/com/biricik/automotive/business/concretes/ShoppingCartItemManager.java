package com.biricik.automotive.business.concretes;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.ShoppingCartItemService;
import com.biricik.automotive.business.abstracts.ShoppingCartService;
import com.biricik.automotive.model.ShoppingCart;
import com.biricik.automotive.model.ShoppingCartItem;
import com.biricik.automotive.repository.ShoppingCartItemRepository;

import jakarta.transaction.Transactional;

@Service
public class ShoppingCartItemManager implements ShoppingCartItemService {

	private final ShoppingCartItemRepository shoppingCartItemRepository;
	private final ShoppingCartService shoppingCartService;

	@Lazy
	public ShoppingCartItemManager(ShoppingCartItemRepository shoppingCartItemRepository,
			ShoppingCartService shoppingCartService) {

		this.shoppingCartItemRepository = shoppingCartItemRepository;
		this.shoppingCartService = shoppingCartService;
	}

	@Transactional
	@Override
	public ShoppingCartItem addShoppingCartItemService(ShoppingCartItem shoppingCartItem) {
		return this.shoppingCartItemRepository.save(shoppingCartItem);
	}

	@Transactional
	@Override
	public ShoppingCartItem updateShoppingCartItemService(ShoppingCartItem shoppingCartItem) {
		return this.shoppingCartItemRepository.save(shoppingCartItem);
	}

	@Transactional
	@Override
	public void deleteShoppingCartItem(int shoppingCartItemId) {

		ShoppingCartItem shoppingCartItem = this.shoppingCartItemRepository.findById(shoppingCartItemId).get();

		this.shoppingCartService.updatedShoppingCart(shoppingCartItem.getShoppingCart().getCustomer().getId(),
				shoppingCartItem);

		this.shoppingCartItemRepository.delete(shoppingCartItem);

	}

	@Override
	public List<ShoppingCartItem> findByCustomerId(int customerId) {
		return this.shoppingCartItemRepository.findByShoppingCartCustomerId(customerId);
	}

	@Transactional
	@Override
	public void resetShoppingCartItem(int shoppingCartId) {

		ShoppingCart shoppingCart = shoppingCartService.findById(shoppingCartId);
		shoppingCartService.updatedShoppingCart(shoppingCart);
		shoppingCartItemRepository.deleteAll(shoppingCart.getShoppingCartItems());

		
	}

}
