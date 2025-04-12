import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // fake API for testing

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
