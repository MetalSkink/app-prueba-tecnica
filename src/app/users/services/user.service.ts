import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('app-id','622f717a40df4c6dd967f1bf')

  getUsuarios():Observable<APIResponse>{
    return this.http.get<APIResponse>(`${this.baseUrl}/?page=1&limit=10`,{headers: this.headers})
  }

  getUsuariosPorParametro(page:number,limit:number):Observable<APIResponse>{
    return this.http.get<APIResponse>(`${this.baseUrl}/?page=1&limit=10`,{headers: this.headers})
  }



}
