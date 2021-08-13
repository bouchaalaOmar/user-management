import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {Phone} from "../model/phone";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit()
    :
    void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phones: this.formBuilder.array([]),
    });
  }

  getPhones() {
    return this.userForm.get("phones") as FormArray;
  }

  onAddPhone() {
    const newPhoneControl = this.formBuilder.control('', Validators.required);
    this.getPhones().push(newPhoneControl);
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const user = new User();
    user.firstName = formValue['firstName'];
    user.lastName = formValue['lastName'];
    user.email = formValue['email'];

    const phoneList: Phone[]= [];
    for(const phone of formValue['phones']){
      phoneList.push(new Phone(phone));
    }
    user.phones = phoneList;

    console.log("user object to add " + JSON.stringify(user));
    this.userService.create(user).subscribe(user => {
      console.log("user added with success", user);
      this.route.navigate(['/user-list'])
    }, (error) => {
      console.log("error when add user", error);
    });
  }
}
