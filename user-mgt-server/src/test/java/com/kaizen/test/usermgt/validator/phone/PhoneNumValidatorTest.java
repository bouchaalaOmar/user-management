package com.kaizen.test.usermgt.validator.phone;

import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PhoneNumValidatorTest {

    private static final PhoneNumberUtil phoneNumberUtil = PhoneNumberUtil.getInstance();

    @Test
    public void givenPhoneNumber_whenPossible_thenValid() {

        PhoneNumber number = new PhoneNumber();

        System.out.println(phoneNumberUtil.getSupportedRegions());
        System.out.println(phoneNumberUtil.getSupportedCallingCodes());

        number.setCountryCode(1).setNationalNumber(123000L);

        assertFalse(phoneNumberUtil.isPossibleNumber(number));
        assertFalse(phoneNumberUtil.isPossibleNumber("hello everyone", "TN"));
        assertFalse(phoneNumberUtil.isPossibleNumber("2162705", "TN"));

        assertTrue(phoneNumberUtil.isPossibleNumber("+21627051311", "TN"));
        assertTrue(phoneNumberUtil.isPossibleNumber("(+216) 27051311", "TN"));
        assertTrue(phoneNumberUtil.isPossibleNumber("216 27051311", "TN"));
        assertTrue(phoneNumberUtil.isPossibleNumber("27051311", "TN"));
    }

    @Test
    public void givenPhoneNumber_whenValid_thenOK() throws Exception {

        PhoneNumber phone = phoneNumberUtil.parse("+21627051111",
                PhoneNumber.CountryCodeSource.UNSPECIFIED.name());

        assertTrue(phoneNumberUtil.isValidNumber(phone));
        assertTrue(phoneNumberUtil.isValidNumberForRegion(phone, "TN"));
        assertFalse(phoneNumberUtil.isValidNumberForRegion(phone, "US"));
        assertTrue(phoneNumberUtil.isValidNumber(phoneNumberUtil.getExampleNumber("IN")));
    }
}