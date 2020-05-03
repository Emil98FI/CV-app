import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GprojectPageRoutingModule } from './gproject-routing.module';

import { GprojectPage } from './gproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GprojectPageRoutingModule
  ],
  declarations: [GprojectPage]
})
export class GprojectPageModule {}
