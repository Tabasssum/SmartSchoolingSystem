import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanteenPageRoutingModule } from './canteen-routing.module';

import { CanteenPage } from './canteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenPageRoutingModule
  ],
  declarations: [CanteenPage]
})
export class CanteenPageModule {}
