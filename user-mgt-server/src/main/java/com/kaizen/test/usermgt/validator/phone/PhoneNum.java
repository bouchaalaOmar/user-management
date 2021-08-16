package com.kaizen.test.usermgt.validator.phone;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = PhoneNumValidator.class)
@Documented
public @interface PhoneNum {

    String message() default "Invalid Phone number";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
