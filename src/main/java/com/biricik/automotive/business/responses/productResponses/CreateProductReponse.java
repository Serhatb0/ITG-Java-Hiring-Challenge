package com.biricik.automotive.business.responses.productResponses;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateProductReponse	{


	
    private	String name;
    private String brandName;
	private String description;
	private double price;
	private String categoryName;
	private int quantity;
	List<String> url;
	
	

}
