package com.biricik.automotive.business.abstracts;

import com.biricik.automotive.business.requests.couponRequest.CreateCouponRequest;
import com.biricik.automotive.business.requests.couponRequest.UpdateCouponRequest;
import com.biricik.automotive.business.responses.PaginatedGenericResponse;
import com.biricik.automotive.business.responses.couponResponses.CreateCouponResponse;
import com.biricik.automotive.business.responses.couponResponses.GetAllCouponResponse;
import com.biricik.automotive.business.responses.couponResponses.UpdateCouponResponse;
import com.biricik.automotive.model.Coupon;

public interface CouponService {
	
		
	public CreateCouponResponse addCoupon(CreateCouponRequest  createCouponRequest);
	
	public UpdateCouponResponse updateCoupon(UpdateCouponRequest updateCouponRequest);
	
	public PaginatedGenericResponse<GetAllCouponResponse>  getAllCoupon(int size,int page);

	public Coupon findByCode(String code);

}
