import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../my-orders/orders.service';
import { RescheduleService } from './reschedule.service';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.scss'],
  animations: [routerTransition()]
})
export class RescheduleComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  id: any;
  order: any;
  items: any[] = [1, 2, 3];
  currentTimeWindow: any[];
  dates: any[] = [];
  timeSlots: any[] = [];
  fromDate: any;
  fromTime: any;
  toDate: any;
  toTime: any;
  fromActiveIndex: any;
  toActiveIndex: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private orderService: OrderService,
    private rescheduleDeliveryService: RescheduleService
  ) {
    this.sliders.push(
      {
        imagePath: 'assets/images/slider1.jpg',
        label: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        imagePath: 'assets/images/slider2.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        imagePath: 'assets/images/slider3.jpg',
        label: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    );

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );
  }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.params['id'];
    this.order = this.orderService.getOrder(this.id);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'May', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    this.currentTimeWindow = this.rescheduleDeliveryService.getDeliveryTimeWindow(this.order.salesOrder.id);
    for (let index = 0; index < this.currentTimeWindow.length; index++) {
      const element = this.currentTimeWindow[index];
      const dateObj = new Date(element);
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const dayNumber = dateObj.getUTCDay();
      const year = dateObj.getUTCFullYear();
      const time = dateObj.getUTCHours();
      this.dates.push({ day: day, month: monthNames[month], dayName: days[dayNumber] });
      this.timeSlots.push({
        from: time,
        to: time + 2
      });
    }
  }

  changeDeliveryDate() {
    const data = {
      orderNo: this.order.salesOrder.id,
      lastName: 'Zilpelwar',
      dateFrom: this.fromDate,
      dateTo: this.toDate
    };
    this.rescheduleDeliveryService.rescheduleDeliver(data).subscribe(result => {
      console.log('Deleviry rescheduled');
    });
  }
  setFromDate(index) {
    this.fromDate = this.currentTimeWindow[index];
    this.fromActiveIndex = index;
  }
  setFromTime(index) {
    this.fromDate = this.currentTimeWindow[index];
  }

  setToDate(index) {
    this.toDate = this.currentTimeWindow[index];
    this.toActiveIndex = index;
  }
  setToTime(index) {
    this.toTime = this.currentTimeWindow[index];
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
