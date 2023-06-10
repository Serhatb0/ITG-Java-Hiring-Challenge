package com.biricik.automotive.business.abstracts;
import org.springframework.http.ResponseEntity;

import com.biricik.automotive.business.requests.paymentRequest.PaymentRequest;

public interface PaymentService {
	
	
	public ResponseEntity<?> checkout(PaymentRequest paymentRequest, String ip);

	public  ResponseEntity<?>  retrieveCheckoutRequest(String token, String discountCode);
	

	
	

}
