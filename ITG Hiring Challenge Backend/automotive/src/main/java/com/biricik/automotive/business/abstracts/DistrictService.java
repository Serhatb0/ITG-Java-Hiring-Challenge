package com.biricik.automotive.business.abstracts;

import java.util.List;

import com.biricik.automotive.business.responses.addressResponses.FindByCityIdDistrictResponse;

public interface DistrictService {

	List<FindByCityIdDistrictResponse> findByCityId(int cityId);

}
