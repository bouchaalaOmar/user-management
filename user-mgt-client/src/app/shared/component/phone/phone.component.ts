import {Component, OnInit} from '@angular/core';
import {PhoneUtils} from "./phone-utils";


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  countryCodes = PhoneUtils.getRegionCodes();
  selectedCountryCode = 'tn';
  phoneCode: number;
  showLabels = false;
  customLabels = PhoneUtils.getCountriesFullName();

  constructor() {
  }

  ngOnInit(): void {
    console.log(PhoneUtils.phoneNumberUtil.getSupportedRegions());
    this.phoneCode = PhoneUtils.getCountryCodeForRegion(this.selectedCountryCode);
  }

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    this.phoneCode = PhoneUtils.getCountryCodeForRegion(value);
  }
}
