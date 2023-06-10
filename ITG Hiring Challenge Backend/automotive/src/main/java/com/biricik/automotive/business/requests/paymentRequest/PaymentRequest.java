package com.biricik.automotive.business.requests.paymentRequest;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PaymentRequest {

	@NotNull
	private int customerId;

	@NotNull
	private int addressId;

	private String discountCode;

	@NotNull
	private BigDecimal totalAmount;
	private int creditCartId;

}
