package com.biricik.automotive.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "credit_cards")
@Data
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class CreditCard extends ParentEntity {

	@Column(name = "card_holder_name")
	private String cardHoldername;

	@Column(name = "card_number")
	private String cardNumber;

	@Column(name = "expire_month")
	private String expireMonth;

	@Column(name = "expire_year")
	private String expireYear;
	
	@Column(name = "cvc")
	private String cvc;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

}
