import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './my-orders-routing.module';
import { MyOrdersComponent } from './my-orders.component';
import { OredrDetailsComponent } from './components';
import { StatModule, ApiCallService, CurrencySymbolsService } from '../../shared';
import { HttpModule } from '@angular/http';
import { OrderService } from './orders.service';


@NgModule({
  imports: [CommonModule, HttpModule, NgbModule, NgbCarouselModule, NgbAlertModule, DashboardRoutingModule, StatModule],
  declarations: [MyOrdersComponent, OredrDetailsComponent],
  providers: [ApiCallService, OrderService, CurrencySymbolsService]
})
export class MyOrdersModule {}
