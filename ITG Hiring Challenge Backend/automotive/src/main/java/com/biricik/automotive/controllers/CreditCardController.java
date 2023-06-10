package com.biricik.automotive.controllers;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.CreditCardService;
import com.biricik.automotive.business.requests.creditCardRequest.CreateCreditCartRequest;
import com.biricik.automotive.business.responses.creditCardResponse.CreateCreditCartResponse;
import com.biricik.automotive.business.responses.creditCardResponse.FindByCustomerIdCreditCardResponse;

@RestController
@RequestMapping("/api/v1")
public class CreditCardController {

	private final CreditCardService creditCardService;

	public CreditCardController(CreditCardService creditCardService) {
		this.creditCardService = creditCardService;
	}

	@PreAuthorize("hasRole('USER')")
	@PostMapping("/creditCard")
	public CreateCreditCartResponse createCreditCart(@RequestBody CreateCreditCartRequest createCreditCartRequest) {
		return creditCardService.createCreditCart(createCreditCartRequest);

	}
	
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping("/creditCard")
	public List<FindByCustomerIdCreditCardResponse> findByCustomerId(@RequestParam int customerId) {
		return creditCardService.findByCustomerId(customerId);

	}

}
