package com.kaizen.test.usermgt.validator.phone;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber;
import com.kaizen.test.usermgt.model.Phone;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PhoneNumValidator implements ConstraintValidator<PhoneNum, Phone> {

    private static final PhoneNumberUtil phoneNumberUtil = PhoneNumberUtil.getInstance();

    @Override
    public boolean isValid(Phone phoneObject, ConstraintValidatorContext constraintValidatorContext) {

        try {
            PhoneNumber phone = phoneNumberUtil.parse(phoneObject.getNum(),
                    PhoneNumber.CountryCodeSource.UNSPECIFIED.name());

            if (phoneNumberUtil.isValidNumberForRegion(phone, phoneObject.getRegionCode())){
                return true;
            }
        } catch (NumberParseException e) {
            e.printStackTrace();
        }
        return false;
    }
}
