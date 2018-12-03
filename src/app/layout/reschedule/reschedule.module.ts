import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RescheduleRoutingModule } from './reschedule-routing.module';
import { RescheduleComponent } from './reschedule.component';
import { StatModule, ApiCallService, CurrencySymbolsService } from '../../shared';
import { OrderRowComponent } from './components';
import { TableComponent } from './components';
import { OrderService } from '../my-orders/orders.service';
import { HttpModule } from '@angular/http';
import { RescheduleService } from './reschedule.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        NgbModule,
        NgbCarouselModule,
        NgbAlertModule,
        RescheduleRoutingModule,
        StatModule
    ],
    declarations: [
      RescheduleComponent,
      OrderRowComponent,
      TableComponent
    ],
    providers: [
      ApiCallService,
      OrderService,
      CurrencySymbolsService,
      RescheduleService
    ]
})
export class RescheduleModule {}
