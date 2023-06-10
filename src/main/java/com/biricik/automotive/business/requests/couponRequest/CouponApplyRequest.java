package com.biricik.automotive.business.requests.couponRequest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CouponApplyRequest {

	@NotNull
	private int customerId;
	@NotBlank
	private String discountCode;

}
