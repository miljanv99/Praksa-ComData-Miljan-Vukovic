import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class UzmiPodatkeService {
  //private listaStudenata:Student[];
  private pageURL: string;

  constructor(private http: HttpClient) {
    //koristimo apiURL iz enviroment.ts
    this.pageURL = environment.apiURL;
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.pageURL}/users`);
  }

  

}
