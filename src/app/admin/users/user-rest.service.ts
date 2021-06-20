import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  users: Array<{id: number, name: string, email: string}> = [];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user-list`);
  }
  
  editUser(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user-list/` + id);
  }

  updateUser(form,id): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user-list/` + id, form.value);
  }

  storeUser(form): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user-list`, form.value);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/user-list/`+ id);
  }
}
