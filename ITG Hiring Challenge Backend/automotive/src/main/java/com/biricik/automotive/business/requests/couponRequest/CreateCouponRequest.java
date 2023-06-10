package com.biricik.automotive.business.requests.couponRequest;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateCouponRequest {

	@NotNull
	private BigDecimal discount;

	@NotNull
	private LocalDate expiresAt;
}
