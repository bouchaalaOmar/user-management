package com.kaizen.test.usermgt.service;

import com.kaizen.test.usermgt.model.Phone;

import java.util.List;

public interface PhoneService {

    List<Phone> findAll();

    Phone save(Phone phone);
}
