import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { PhoneComponent } from './shared/component/phone/phone.component';
import {NgxFlagPickerModule} from "ngx-flag-picker";

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-new', component: NewUserComponent},
  {path: 'phone', component: PhoneComponent },
  {path: '', component: UserListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxFlagPickerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
