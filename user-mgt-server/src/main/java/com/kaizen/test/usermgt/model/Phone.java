package com.kaizen.test.usermgt.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.kaizen.test.usermgt.validator.phone.PhoneNum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "phone",
        uniqueConstraints = {
                @UniqueConstraint(name = "phone_num_unique", columnNames = "num")
        })
@PhoneNum
public class Phone {

    @Id
    @Column(name = "phone_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String num;

    @Column(name = "region_code")
    @NotBlank
    private String regionCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    public Phone(String regionCode, String num) {
        this.regionCode = regionCode;
        this.num = num;
    }
}
