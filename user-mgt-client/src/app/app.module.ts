import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-new', component: NewUserComponent},
  {path: '', component: UserListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
