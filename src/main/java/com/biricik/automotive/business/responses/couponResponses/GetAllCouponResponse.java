package com.biricik.automotive.business.responses.couponResponses;


import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GetAllCouponResponse {

	private String code;

	private BigDecimal discount;

	private LocalDate expiresAt;

}
