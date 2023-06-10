package com.biricik.automotive.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.PaymentService;
import com.biricik.automotive.business.requests.paymentRequest.PaymentRequest;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1")
public class PaymentController {

	private final PaymentService paymentService;

	public PaymentController(PaymentService paymentService) {
		this.paymentService = paymentService;
	}
	
	
	@PreAuthorize("hasRole('USER')")
	@PostMapping("/paymnets")
	public ResponseEntity<?> createPayment(@RequestBody PaymentRequest paymentRequest, HttpServletRequest request) {
		return paymentService.checkout(paymentRequest, request.getRemoteAddr());
	}

	@RequestMapping(value = "/paymnets/retrieveCheckoutRequest", method = { RequestMethod.GET, RequestMethod.POST })
	public ResponseEntity<?> retrieveCheckoutRequest(@RequestParam String token,
			@RequestParam(required = false) String discountCode) {

		return paymentService.retrieveCheckoutRequest(token, discountCode);
	}

}
