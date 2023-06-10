package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.requests.addressRequest.CreateAddressRequest;
import com.biricik.automotive.business.responses.addressResponses.CreateAddressResponse;
import com.biricik.automotive.business.responses.addressResponses.FindByCustomerIdAddressResponse;
import com.biricik.automotive.business.responses.addressResponses.FindByIdAddressResponse;


public interface AddressService {

	CreateAddressResponse addAddress(CreateAddressRequest createAddressRequest);

	List<FindByCustomerIdAddressResponse> findByCustomerId(int customerId);

	FindByIdAddressResponse findById(int id);

	void deleteAddress(int id);



	

	
}
