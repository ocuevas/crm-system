import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  constructor(private http: HttpClient) { }
  baseUrl ='http://localhost/crm_api/api';
 
  login(loginData): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/user/login.php', loginData);
  }
  register(userData): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/user/register.php', userData);
  }
}
