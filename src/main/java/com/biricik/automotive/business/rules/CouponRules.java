package com.biricik.automotive.business.rules;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.biricik.automotive.exception.BusinessExcepiton;
import com.biricik.automotive.model.Coupon;
import com.biricik.automotive.repository.CouponRepository;
import com.biricik.automotive.util.MessageProvider;
import com.biricik.automotive.util.MessageStatus;

@Component
public class CouponRules {

	@Autowired
	private  MessageProvider messageProvider;
	private final CouponRepository couponRepository;

	public CouponRules(CouponRepository couponRepository) {
		this.couponRepository = couponRepository;
	} 

	public void checkCouponDateExpiry(Coupon coupon) {
		if (coupon.getExpiresAt() != null) { 
			if (coupon.getExpiresAt().isBefore(LocalDate.now())) {
				throw new BusinessExcepiton("0001", messageProvider.getMessage("0001", MessageStatus.ERRORS),
						HttpStatus.BAD_REQUEST);
			}
		}
	}

	public void checkCouponValidity(String couponCode) {
		
		
		if(	this.couponRepository.findByCode(couponCode).isEmpty()) {
			throw new BusinessExcepiton("0002",messageProvider.getMessage("0002", MessageStatus.ERRORS),HttpStatus.BAD_REQUEST );
		}
	
	}

}
