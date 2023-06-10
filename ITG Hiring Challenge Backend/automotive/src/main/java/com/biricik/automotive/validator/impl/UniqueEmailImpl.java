package com.biricik.automotive.validator.impl;

import com.biricik.automotive.repository.UserRepository;
import com.biricik.automotive.validator.UniqueEmail;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueEmailImpl implements ConstraintValidator<UniqueEmail, String> {

	private final UserRepository userRepository;

	public UniqueEmailImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		return !userRepository.existsByEmail(email);
	}
}