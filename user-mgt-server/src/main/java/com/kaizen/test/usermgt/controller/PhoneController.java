package com.kaizen.test.usermgt.controller;

import com.kaizen.test.usermgt.model.Phone;
import com.kaizen.test.usermgt.service.PhoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/phone")
public class PhoneController {

    private final PhoneService phoneService;

    /**
     *
     * @return
     */
    @GetMapping
    public List<Phone> getAllPhones() {
        return phoneService.findAll();
    }

    /**
     *
     * @param phone
     * @return
     */
    @PostMapping
    public Phone addNewPhone(@Valid @RequestBody Phone phone){
        return phoneService.save(phone);
    }
}
