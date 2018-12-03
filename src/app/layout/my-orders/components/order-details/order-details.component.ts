import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencySymbolsService } from '../../../../shared';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OredrDetailsComponent implements OnInit {
  @Input()
  data: any;
  paid: Boolean = false;
  constructor(private router: Router, private currencySymbols: CurrencySymbolsService) {}
  ngOnInit() {
    if (this.data.salesOrder.paymentStatus === 'CAPTURED') {
      this.paid = true;
    }
  }
  orderDetails(id) {
    this.router.navigate(['/order-details/' + id]);
  }
  deliveryTimeChange(id) {
    this.router.navigate(['/reschedule/' + id]);
  }

  currencySymbol(currencyName: String) {
    return this.currencySymbols.getSymbol(currencyName);
  }
  getHeaderClass() {
    let classStr = 'header-not-paid';
    if (this.paid && this.data.balanceToPayAmount.amount === 'null') {
      classStr = 'header-paid';
    } else if (this.data.balanceToPayAmount.amount !== 'null' && this.data.salesOrder.salesOrderPrice.grossAmount !== 'null') {
      classStr = 'header-partial';
    }
    return classStr;
  }
}
