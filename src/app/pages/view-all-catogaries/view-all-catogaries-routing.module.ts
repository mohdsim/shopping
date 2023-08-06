import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllCatogariesPage } from './view-all-catogaries.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllCatogariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllCatogariesPageRoutingModule {}
