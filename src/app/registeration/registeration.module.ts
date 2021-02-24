import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';

import { RegisterationPageRoutingModule } from './registeration-routing.module';

import { RegisterationPage } from './registeration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // NgxQRCodeModule,
    RegisterationPageRoutingModule
  ],
  declarations: [RegisterationPage]
})
export class RegisterationPageModule {}
