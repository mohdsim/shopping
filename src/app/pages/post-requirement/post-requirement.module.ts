import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostRequirementPageRoutingModule } from './post-requirement-routing.module';

import { PostRequirementPage } from './post-requirement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRequirementPageRoutingModule
  ],
  declarations: [PostRequirementPage]
})
export class PostRequirementPageModule {}
