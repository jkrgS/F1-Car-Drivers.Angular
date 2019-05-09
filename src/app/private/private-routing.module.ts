import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversMainComponent } from './drivers/drivers-main/drivers-main.component';

const routes: Routes = [{ path: '', component: DriversMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
