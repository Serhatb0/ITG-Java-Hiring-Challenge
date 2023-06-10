package com.biricik.automotive.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class ApplicationExceptionHandler {

	@ExceptionHandler(BusinessExcepiton.class)
	public  ResponseEntity<ApiErrorResponse> handleBusinessException(BusinessExcepiton businessExcepiton, HttpServletRequest request) {

		String guid = UUID.randomUUID().toString();
		ApiErrorResponse response = new ApiErrorResponse();
		response.setGuid(guid);
		response.setErrorCode(businessExcepiton.getErrorCode());
		response.setMessage(businessExcepiton.getMessage());
		response.setStatusCode(businessExcepiton.getHttpStatus().value());
		response.setStatusName(businessExcepiton.getHttpStatus().name());
		response.setMethod(request.getMethod());
		response.setPath(request.getRequestURI());
		response.setTimestamp(LocalDateTime.now());

		return new ResponseEntity<>(response,businessExcepiton.getHttpStatus());

	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<ValidationErrorResponse> handleValidationException(MethodArgumentNotValidException exceptions,HttpServletRequest request) {
		ValidationErrorResponse validationErrorResponse = new ValidationErrorResponse();
		Map<String, String> validationErrors = new HashMap<String, String>();
		for (FieldError fieldError : exceptions.getBindingResult().getFieldErrors()) {
			validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		
		validationErrorResponse.setMessage("Validation Exception");
		validationErrorResponse.setPath(request.getRequestURI());
		validationErrorResponse.setMethod(request.getMethod());
		validationErrorResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
		validationErrorResponse.setStatusName(HttpStatus.BAD_REQUEST.name());
		validationErrorResponse.setTimestamp(LocalDateTime.now());
		validationErrorResponse.setValidationErrors(validationErrors);

		
		return new ResponseEntity<>(validationErrorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = NoSuchElementException.class)
	public ResponseEntity<BaseError> handleNoSuchElementException(NoSuchElementException e,
			HttpServletRequest request) {

		BaseError baseError = new BaseError();

		baseError.setMessage("ELEMENT NOT FOUND");
		baseError.setPath(request.getRequestURI());
		baseError.setMethod(request.getMethod());
		baseError.setStatusCode(HttpStatus.NOT_FOUND.value());
		baseError.setStatusName(HttpStatus.NOT_FOUND.name());
		baseError.setTimestamp(LocalDateTime.now());

		return new ResponseEntity<>(baseError, HttpStatus.NOT_FOUND);
	}

}
