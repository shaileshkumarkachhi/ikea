import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OredrDetailsComponent implements OnInit {
  @Input()
  data: any;
  paid: Boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.data.salesOrder.paymentStatus === 'CAPTURED') {
      this.paid = true;
    }
  }
  orderDetails() {
    this.router.navigate(['/order-details']);
  }
  deliveryTimeChange() {
    this.router.navigate(['/reschedule']);
  }
}
