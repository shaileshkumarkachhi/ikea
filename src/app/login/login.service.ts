import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiCallLoginService } from '../shared';
@Injectable()
export class LoginService {
  constructor(private apiCallService: ApiCallLoginService, private rout: Router) {}

  login(username, password) {
    const data = {
      userId: username
    };
    return this.apiCallService.post('/login', { userId: 'shailesh'}).pipe(
      map((response: any) => {
        localStorage.setItem('auth_token', response.token);

        localStorage.setItem('isLoggedin', 'true');
        return response;
      }),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }

  logout() {
    localStorage.clear();
    this.rout.navigate(['/login']);
  }
}
