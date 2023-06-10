package com.biricik.automotive.business.concretes;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CreditCardService;
import com.biricik.automotive.business.abstracts.CustomerService;
import com.biricik.automotive.business.requests.creditCardRequest.CreateCreditCartRequest;
import com.biricik.automotive.business.responses.creditCardResponse.CreateCreditCartResponse;
import com.biricik.automotive.business.responses.creditCardResponse.FindByCustomerIdCreditCardResponse;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.CreditCard;
import com.biricik.automotive.model.Customer;
import com.biricik.automotive.repository.CreditCardRepository;

import jakarta.transaction.Transactional;

@Service
public class CreditCardManager implements CreditCardService {

	private final CreditCardRepository creditCardRepository;
	private final ModelMapperService modelMapperService;
	private final CustomerService customerService;

	public CreditCardManager(CreditCardRepository creditCardRepository, ModelMapperService modelMapperService,
			CustomerService customerService) {
		;
		this.creditCardRepository = creditCardRepository;
		this.modelMapperService = modelMapperService;
		this.customerService = customerService;
	}

	@Transactional
	@Override
	public CreateCreditCartResponse createCreditCart(CreateCreditCartRequest createCreditCartRequest) {

		Customer customer = customerService.findById(createCreditCartRequest.getCustomerId());

		CreditCard creditCard = modelMapperService.forRequest().map(createCreditCartRequest, CreditCard.class);
		creditCard.setId(0);
		creditCard.setUser(customer);

		creditCardRepository.save(creditCard);

		return modelMapperService.forResponse().map(creditCard, CreateCreditCartResponse.class);

	}

	@Override
	public List<FindByCustomerIdCreditCardResponse> findByCustomerId(int customerId) {

		List<CreditCard> creditCards = creditCardRepository.findByUserId(customerId);

		List<FindByCustomerIdCreditCardResponse> responses = creditCards.stream()
				.map(card -> modelMapperService.forResponse().map(card, FindByCustomerIdCreditCardResponse.class))
				.collect(Collectors.toList());

		return responses;

	}

	@Override
	public CreditCard findById(int creditCartId) {
		return creditCardRepository.findById(creditCartId).get();
	}

}
