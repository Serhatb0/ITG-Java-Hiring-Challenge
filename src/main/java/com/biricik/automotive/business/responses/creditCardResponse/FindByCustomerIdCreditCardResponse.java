package com.biricik.automotive.business.responses.creditCardResponse;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FindByCustomerIdCreditCardResponse {

	private int id;
	
	private String cardHoldername;

	private String cardNumber;

	private String expireMonth;

	private String expireYear;
}
