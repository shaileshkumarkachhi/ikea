import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersModule' },
            { path: 'order-details', loadChildren: './order-details/order-details.module#OrderDetailsModule' },
            { path: 'reschedule', loadChildren: './reschedule/reschedule.module#RescheduleModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
