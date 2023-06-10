package com.biricik.automotive.exception;

import lombok.Data;

@Data
public class ApiErrorResponse  extends BaseError{

	private String guid;
	private String errorCode;
	
}