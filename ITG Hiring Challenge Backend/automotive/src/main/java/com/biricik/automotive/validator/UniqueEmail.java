package com.biricik.automotive.validator;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.biricik.automotive.validator.impl.UniqueEmailImpl;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = {UniqueEmailImpl.class})
public @interface UniqueEmail {
    String message() default "{0002}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}