package com.kaizen.test.usermgt.service.impl;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.repository.PhoneRepository;
import com.kaizen.test.usermgt.service.PhoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

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
        Optional<Phone> phoneOptional = phoneRepository.findPhoneByNum(phone.getNum());
        if(phoneOptional.isPresent()){
            throw new IllegalStateException("phone numero already taken");
        }
        return phoneRepository.save(phone);
    }
}
