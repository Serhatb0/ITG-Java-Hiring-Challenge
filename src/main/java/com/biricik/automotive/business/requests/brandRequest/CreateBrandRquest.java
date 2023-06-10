package com.biricik.automotive.business.requests.brandRequest;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateBrandRquest {
	
	
	@NotBlank
	private String name;
}
