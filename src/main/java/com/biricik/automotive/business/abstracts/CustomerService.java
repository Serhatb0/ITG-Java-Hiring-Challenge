package com.biricik.automotive.business.abstracts;
import com.biricik.automotive.model.Customer;

public interface CustomerService {
	
	public Customer findById(int customerId);

}
