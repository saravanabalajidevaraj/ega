import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  constructor(private http: HttpClient) { }

  loggedIn = false;

  registerUser(form: any){
    console.log(form.value);
    return this.http.post('${environment.apiUrl}register', form.value);
  }

   isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }

  logIn(form: any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/login`, form.value);
    //return result;
  }

  logout(token: any): Observable<any>{
    return this.http.post('${environment.apiUrl}/logout', {'token': token});
    //return result;
  }
}
