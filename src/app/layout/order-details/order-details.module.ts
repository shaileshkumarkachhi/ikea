import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NgbCarouselModule,
        NgbAlertModule,
        OrderDetailsRoutingModule,
        StatModule
    ],
    declarations: [
      OrderDetailsComponent
    ]
})
export class OrderDetailsModule {}
