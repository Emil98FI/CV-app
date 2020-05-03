import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcaPageRoutingModule } from './eca-routing.module';

import { EcaPage } from './eca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcaPageRoutingModule
  ],
  declarations: [EcaPage]
})
export class EcaPageModule {}
