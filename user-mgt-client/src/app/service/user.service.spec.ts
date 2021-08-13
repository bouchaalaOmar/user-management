import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserService} from './user.service';
import {User} from "../model/user";
import {environment} from "../../environments/environment";

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  let userItems: User[];
  const baseUrl = `${environment.apiUrl}/user`;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
    userItems = [{
      "id": 1,
      "firstName": "omar",
      "lastName": "bouchaala",
      "email": "omar@gmail.com",
      "phones": [{"id": 1, "num": "27051311"}, {"id": 2, "num": "2001411"},
        {"id": 3, "num": "25175311"}]
    }]
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return all users', async () => {
    userService.getAll()
      .subscribe(users => {
        expect(users.length).toBe(1);
        expect(users[0].phones.length).toBe(3);
      });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
    req.flush([userItems]);
    httpTestingController.verify();
  });
});
