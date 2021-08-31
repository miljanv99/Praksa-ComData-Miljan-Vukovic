import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserDataResponse } from '../models/user-data-response.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  //private listaStudenata:Student[];
  private pageURL: string;

  constructor(private http: HttpClient) {
    //koristimo apiURL iz enviroment.ts
    //mozes ovde staviti + users
    this.pageURL = environment.apiURL;
  }

  getUsers(): Observable<UserDataResponse> {
    return this.http.get<UserDataResponse>(`${this.pageURL}/users`);
  }

  addUser(user: User): Observable<UserDataResponse> {
    return this.http.post<UserDataResponse>(`${this.pageURL}/users`, user);
  }
  deleteUser(userID: Number) {
    return this.http.delete(`${this.pageURL}/users/` + userID);
  }
  editUser(user:User): Observable<UserDataResponse>{
    return this.http.post<UserDataResponse>(`${this.pageURL}/users`, user);
  }



}
