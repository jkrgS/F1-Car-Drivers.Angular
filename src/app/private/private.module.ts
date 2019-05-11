import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriversMainComponent } from './drivers/drivers-main/drivers-main.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriversDetailsComponent } from './drivers/drivers-details/drivers-details.component';

@NgModule({
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
  declarations: [DriversMainComponent, DriversListComponent, DriversDetailsComponent],
  exports: [DriversMainComponent, DriversListComponent]
})
export class PrivateModule {}
