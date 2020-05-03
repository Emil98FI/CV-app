import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GprojectPage } from './gproject.page';

const routes: Routes = [
  {
    path: '',
    component: GprojectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GprojectPageRoutingModule {}
