import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcaPage } from './eca.page';

const routes: Routes = [
  {
    path: '',
    component: EcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcaPageRoutingModule {}
