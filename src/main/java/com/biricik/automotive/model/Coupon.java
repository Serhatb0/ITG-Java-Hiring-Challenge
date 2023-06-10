package com.biricik.automotive.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "coupons")
@Data
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class Coupon extends ParentEntity {

	@Column(name = "code")
	private String code;

	@Column(name = "discount")
	private BigDecimal discount;

	@Column(name = "expires_at")
	private LocalDate expiresAt;
	
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "coupon")
	List<Order> orders;
	

}
