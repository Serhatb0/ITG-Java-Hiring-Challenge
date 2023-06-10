package com.biricik.automotive.business.concretes;

import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CustomerService;
import com.biricik.automotive.model.Customer;
import com.biricik.automotive.repository.CustomerRepository;

@Service
public class CustomerManager implements CustomerService {

	private final CustomerRepository customerRepository;

	public CustomerManager(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Override
	public Customer findById(int customerId) {

		return customerRepository.findById(customerId).get();
	}

}
