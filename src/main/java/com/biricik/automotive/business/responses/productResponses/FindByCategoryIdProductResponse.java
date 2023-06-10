package com.biricik.automotive.business.responses.productResponses;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FindByCategoryIdProductResponse {

	private int id;
	private String name;
	private String description;
	private double price;
	private String categoryName;
	private String brandName;
	private int quantity;
	List<String> url;
}