import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiCallService } from '../../shared';
@Injectable()
export class OrderService {
  orders: any = [
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
            itemName: 'KOMPL clothes rail 50 white',
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
      deliveryDateFrom: '2018-11-25 21:00:00',
      deliveryDateTo: '2018-11-30 02:00:00'
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
            itemName: 'KOMPL clothes rail 50 white',
            itemType: 'ART',
            salesOrderQty: 2,
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
        amount: 22.5,
        currencyCode: 'GBP'
      },
      oMSOrderNumber: null,
      oMSOrderCreationDateTime: null,
      deliveryDateFrom: '2018-11-27 11:30:06',
      deliveryDateTo: '2018-11-30 13:30:06'
    }
  ];

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
    return this.orders;
  }

  getOrder(id) {
    const order = this.orders.filter(key => {
      return key.salesOrder.id + '' === id + '';
    });
    if (order && order.length > 0) {
      return order[0];
    } else {
      return [];
    }
  }
}
