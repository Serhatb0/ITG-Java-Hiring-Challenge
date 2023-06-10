package com.biricik.automotive.business.concretes;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.biricik.automotive.business.abstracts.CouponService;
import com.biricik.automotive.business.requests.couponRequest.CreateCouponRequest;
import com.biricik.automotive.business.requests.couponRequest.UpdateCouponRequest;
import com.biricik.automotive.business.responses.PaginatedGenericResponse;
import com.biricik.automotive.business.responses.couponResponses.CreateCouponResponse;
import com.biricik.automotive.business.responses.couponResponses.GetAllCouponResponse;
import com.biricik.automotive.business.responses.couponResponses.UpdateCouponResponse;
import com.biricik.automotive.core.mappers.ModelMapperService;
import com.biricik.automotive.model.Coupon;
import com.biricik.automotive.repository.CouponRepository;

import jakarta.transaction.Transactional;

@Service
public class CouponManager implements CouponService {

	private final CouponRepository couponRepository;
	private final ModelMapperService modelMapperService;

	public CouponManager(CouponRepository couponRepository, ModelMapperService modelMapperService) {
		this.couponRepository = couponRepository;
		this.modelMapperService = modelMapperService;

	}

	@Transactional
	@Override
	public CreateCouponResponse addCoupon(CreateCouponRequest createCouponRequest) {
		Coupon coupon =  modelMapperService.forRequest().map(createCouponRequest, Coupon.class);;
		coupon.setCode(UUID.randomUUID().toString());
		this.couponRepository.save(coupon);

		return modelMapperService.forResponse().map(coupon, CreateCouponResponse.class);

	}
	
	@Transactional
	@Override
	public UpdateCouponResponse updateCoupon(UpdateCouponRequest updateCouponRequest) {
		Coupon coupon =  modelMapperService.forRequest().map(updateCouponRequest, Coupon.class);
		coupon.setCode(this.couponRepository.findById(updateCouponRequest.getId()).get().getCode());
		this.couponRepository.save(coupon);

		return modelMapperService.forResponse().map(coupon, UpdateCouponResponse.class);

	}

	@Override
	public PaginatedGenericResponse<GetAllCouponResponse> getAllCoupon(int size,int page) {

		Pageable pageable = PageRequest.of(page, size);

		Page<Coupon> coupon = this.couponRepository.findAll(pageable);

		List<GetAllCouponResponse> getAllCouponResponses = coupon.getContent().stream()
				.map(couponItem -> modelMapperService.forResponse().map(couponItem, GetAllCouponResponse.class) ).collect(Collectors.toList());
		
		
		return new PaginatedGenericResponse<GetAllCouponResponse>(getAllCouponResponses, coupon.getNumber(),
				coupon.getSize(), coupon.getTotalElements(), coupon.getTotalPages());

	}

	@Override
	public Coupon findByCode(String code) {
		return this.couponRepository.findByCode(code).orElse(new Coupon());
	}

}
