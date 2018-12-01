import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RescheduleRoutingModule } from './reschedule-routing.module';
import { RescheduleComponent } from './reschedule.component';
import { StatModule } from '../../shared';
import { OrderRowComponent } from './components';
import { TableComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
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
    ]
})
export class RescheduleModule {}
