import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  cachedRequests: Array<HttpRequest<any>> = [];


  public getToken() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/token').subscribe(token => {
        if (token[0]) {
          resolve(token[0]);
        } else {
          reject();
        }
      });
    });
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return this.tokenNotExpired(token);
  }
  public tokenNotExpired(token) {
    if (token) {
      const jwtHelper = new JwtHelperService();
      return token != null && !jwtHelper.isTokenExpired(token);
    }else {
      return false;
    }
  }
  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
