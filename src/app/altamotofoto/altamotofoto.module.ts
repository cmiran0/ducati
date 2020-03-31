import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltamotofotoPageRoutingModule } from './altamotofoto-routing.module';

import { AltamotofotoPage } from './altamotofoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltamotofotoPageRoutingModule
  ],
  declarations: [AltamotofotoPage]
})
export class AltamotofotoPageModule {}
