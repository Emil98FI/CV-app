import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'tech',
        loadChildren: () => import('../tech/tech.module').then(m => m.TechPageModule)
      },
      {
        path: 'soft',
        loadChildren: () => import('../soft/soft.module').then(m => m.SoftPageModule)
      },
      {
        path: 'project',
        loadChildren: () => import('../project/project.module').then(m => m.ProjectPageModule)
      },
      {
        path: 'gproject',
        loadChildren: () => import('../gproject/gproject.module').then(m => m.GprojectPageModule)
      },
      {
        path: 'eca',
        loadChildren: () => import('../eca/eca.module').then(m => m.EcaPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
