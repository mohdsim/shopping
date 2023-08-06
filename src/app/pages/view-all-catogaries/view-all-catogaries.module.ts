import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllCatogariesPageRoutingModule } from './view-all-catogaries-routing.module';

import { ViewAllCatogariesPage } from './view-all-catogaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllCatogariesPageRoutingModule
  ],
  declarations: [ViewAllCatogariesPage]
})
export class ViewAllCatogariesPageModule {}
