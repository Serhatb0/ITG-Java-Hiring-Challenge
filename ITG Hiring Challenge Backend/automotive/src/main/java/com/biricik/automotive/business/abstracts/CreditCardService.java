package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.creditCardRequest.CreateCreditCartRequest;
import com.biricik.automotive.business.responses.creditCardResponse.CreateCreditCartResponse;
import com.biricik.automotive.business.responses.creditCardResponse.FindByCustomerIdCreditCardResponse;
import com.biricik.automotive.model.CreditCard;

public interface CreditCardService {
	
	public CreateCreditCartResponse createCreditCart(CreateCreditCartRequest createCreditCartRequest);
	
	List<FindByCustomerIdCreditCardResponse> findByCustomerId(int customerId);
	
	public CreditCard findById(int creditCartId);

}
