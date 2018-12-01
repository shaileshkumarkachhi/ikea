import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RescheduleComponent } from './reschedule.component';

const routes: Routes = [
    {
        path: '', component: RescheduleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RescheduleRoutingModule {
}
