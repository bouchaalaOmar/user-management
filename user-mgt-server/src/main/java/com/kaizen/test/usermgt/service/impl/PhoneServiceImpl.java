package com.kaizen.test.usermgt.service.impl;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.repository.PhoneRepository;
import com.kaizen.test.usermgt.service.PhoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class PhoneServiceImpl implements PhoneService {

    private final PhoneRepository phoneRepository;

    @Override
    public List<Phone> findAll() {
        return phoneRepository.findAll();
}

    @Override
    public Phone save(Phone phone) {
        return phoneRepository.save(phone);
    }
}
