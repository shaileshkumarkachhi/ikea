import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiCallService } from '../../shared';
@Injectable()
export class OrderService {
  orders: any;

  constructor(private apiCallService: ApiCallService, private rout: Router) {}

  public get() {
    return this.orders;
  }

  getOrders() {
    // const lastName = localStorage.getItem('lastName');
    // return this.apiCallService.get('/order/customer/' + lastName).pipe(
    //   map((response: any) => {
    //     return response;
    //   }),
    //   catchError((error: Response) => {
    //     return throwError(error);
    //   })
    // );
    this.orders = [
      {
        salesOrder: {
          id: 1000008243,
          createdDtime: '2018-11-20 08:00:00',
          completedDtime: null,
          salesOrderCustomer: {
            registerType: null,
            memberShipId: null
          },
          salesOrderItemList: [
            {
              id: 'ci90256893',
              itemNo: '90256893',
              itemType: 'ART',
              salesOrderQty: 2,
              salesOrderQtyType: 'PIECES',
              salesOrderItemPrice: {
                grossAmount: 10,
                netAmount: 8.33,
                vatAmount: 1.67,
                currencyCode: 'GBP'
              },
              salesOrderSubTotalPrice: {
                grossAmount: 20,
                netAmount: 16.66,
                vatAmount: 3.34,
                currencyCode: 'GBP'
              },
              addedTimestamp: null
            }
          ],
          salesOrderPrice: {
            grossAmount: 20,
            netAmount: 16.66,
            vatAmount: 3.34,
            currencyCode: 'GBP'
          },
          fulfilmentMethod: {
            fulfilmentMethod: null
          },
          salesOrderState: null,
          paymentStatus: 'CAPTURED'
        },
        balanceToPayAmount: {
          amount: 17.5,
          currencyCode: 'GBP'
        },
        oMSOrderNumber: null,
        oMSOrderCreationDateTime: null,
        deliveryDate: '2018-11-29 08:12:00'
      },
      {
        salesOrder: {
          id: 1000008301,
          createdDtime: '2018-11-20 18:30:06',
          completedDtime: null,
          salesOrderCustomer: {
            registerType: null,
            memberShipId: null
          },
          salesOrderItemList: [
            {
              id: 'ci90256893',
              itemNo: '90256893',
              itemType: 'ART',
              salesOrderQty: 6,
              salesOrderQtyType: 'PIECES',
              salesOrderItemPrice: null,
              salesOrderSubTotalPrice: null,
              addedTimestamp: null
            }
          ],
          salesOrderPrice: {
            grossAmount: null,
            netAmount: null,
            vatAmount: null,
            currencyCode: null
          },
          fulfilmentMethod: {
            fulfilmentMethod: null
          },
          salesOrderState: null,
          paymentStatus: null
        },
        balanceToPayAmount: {
          amount: 37.5,
          currencyCode: 'GBP'
        },
        oMSOrderNumber: null,
        oMSOrderCreationDateTime: null,
        deliveryDate: '2018-12-01 01:00:00'
      }
    ];
    return this.orders;
  }
}
