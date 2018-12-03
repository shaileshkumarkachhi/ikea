import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';
import { StatModule, ApiCallService, CurrencySymbolsService } from '../../shared';
import { OrderRowComponent } from './components';
import { TableComponent } from './components';
import { OrderService } from '../my-orders/orders.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        NgbModule,
        NgbCarouselModule,
        NgbAlertModule,
        OrderDetailsRoutingModule,
        StatModule
    ],
    declarations: [
      OrderDetailsComponent,
      OrderRowComponent,
      TableComponent
    ],
    providers: [ApiCallService, OrderService, CurrencySymbolsService]
})
export class OrderDetailsModule {}
