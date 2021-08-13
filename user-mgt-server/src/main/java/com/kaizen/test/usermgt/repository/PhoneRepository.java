package com.kaizen.test.usermgt.repository;

import com.kaizen.test.usermgt.model.Phone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, Long> {

    Optional<Phone> findPhoneByNum(String num);
}
