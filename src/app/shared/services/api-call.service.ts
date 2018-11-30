import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ApiCallService {
  rootUrl: String = 'http://35.228.226.220';

  constructor(private http: Http) {  }

  post(url, ...args) {
    const headerOptions = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('auth_token')
    });

    const requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      headers: headerOptions
    });
    return this.http
      .post(this.rootUrl + url, args[0], requestOptions)
      .pipe(map((response: any) => response.json()));
  }

  get(url) {
    const headerOptions = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('auth_token')
    });
    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      headers: headerOptions
    });
    return this.http
      .get(this.rootUrl + url, requestOptions)
      .pipe(map((response: any) => response.json()));
  }

  put(url, ...args) {
    const headerOptions = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('auth_token')
    });
    const requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      headers: headerOptions
    });
    return this.http
      .put(this.rootUrl + url, args, requestOptions)
      .pipe(map((response: any) => response.json()));
  }

  delete(url) {
    const headerOptions = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('auth_token')
    });
    const requestOptions = new RequestOptions({
      method: RequestMethod.Delete,
      headers: headerOptions
    });
    return this.http
      .delete(this.rootUrl + url, requestOptions)
      .pipe(map((response: any) => response.json()));
  }
}
