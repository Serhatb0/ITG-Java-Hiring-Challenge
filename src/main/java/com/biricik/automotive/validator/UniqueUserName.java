package com.biricik.automotive.validator;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.biricik.automotive.validator.impl.UniqueUserNameImpl;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = {UniqueUserNameImpl.class})
public @interface UniqueUserName {
	   String message() default "{0003}";
	    Class<?>[] groups() default {};
	    Class<? extends Payload>[] payload() default {};
}
