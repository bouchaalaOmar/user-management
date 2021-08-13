import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../service/user.service";
import * as Rx from 'rxjs';
import {delay} from "rxjs/operators";
import {User} from "../model/user";

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userItems: User[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userItems = [{
      "id": 1,
      "firstName": "omar",
      "lastName": "bouchaala",
      "email": "omar@gmail.com",
      "phones": [{"id": 1, "num": "27051311"}, {"id": 2, "num": "2001411"},
        {"id": 3, "num": "25175311"}]
    }]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllUsers and get response as empty array', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(UserService);
    spyOn(service, "getAll").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getAllUsers();
    tick(100);
    expect(component.users).toEqual([]);
  }))

  it('should call getPostDetails and get response as array', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(UserService);
    spyOn(service, "getAll").and.callFake(() => {
      return Rx.of(userItems)
        .pipe(delay(2000));
    });
    component.getAllUsers();
    tick(2000);
    expect(component.users).toEqual(userItems);
  }));
});
