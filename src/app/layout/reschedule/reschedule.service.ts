import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiCallService } from '../../shared';
@Injectable()
export class RescheduleService {
  constructor(private apiCallService: ApiCallService, private rout: Router) {}

  rescheduleDeliver(data) {
    return this.apiCallService.post('/reschedule/order/customer', data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }

  getDeliveryTimeWindow(orderNo) {
    // return this.apiCallService.get('/order/deliveryArrangements/' + orderNo).pipe(
    //   map((response: any) => {
    //     return response;
    //   }),
    //   catchError((error: Response) => {
    //     return throwError(error);
    //   })
    // );
    const result = {
      orderNo: '1000008243',
      'creation date': '2018-11-20 08:00:00',
      deliveryTimeWindows: ['2018-11-25 10:00:00', '2018-11-28 11:00:00']
    };
    return result.deliveryTimeWindows;
  }
}
