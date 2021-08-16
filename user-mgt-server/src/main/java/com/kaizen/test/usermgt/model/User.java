package com.kaizen.test.usermgt.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.kaizen.test.usermgt.validator.phone.PhoneNum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(name = "user_email_unique", columnNames = "email")
        })
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    @NotBlank
    private String firstName;

    @Column(name = "last_name")
    @NotBlank
    private String lastName;

    @Column(name = "email")
    @NotBlank
    @Email
    private String email;

    @OneToMany(mappedBy = "user",
            cascade = CascadeType.ALL)
    @JsonManagedReference
    @NotEmpty
    private List<Phone> phones = new ArrayList();


    public void addPhone(Phone phone){
        this.phones.add(phone);
        phone.setUser(this);
    }


}
