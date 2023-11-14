import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.url;
  constructor(private httpClient: HttpClient) { }

  async login(username: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.httpClient.post(`${this.url}/login`, {
        username: username,
        password: password
      }).subscribe((value: any) => {
        resolve(value);
      })
    })
  }
}
