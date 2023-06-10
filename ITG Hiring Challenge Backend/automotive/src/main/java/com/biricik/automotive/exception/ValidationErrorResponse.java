package com.biricik.automotive.exception;

import java.util.Map;

import lombok.Data;

@Data
public class ValidationErrorResponse extends BaseError {

	
	Map<String, String> validationErrors;
}