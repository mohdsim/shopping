import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './comman-components/accordian/accordian.component';
import { IonicModule } from '@ionic/angular';

const components=[
  AccordianComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    IonicModule
    
  ],
  exports:[
    ...components
  ]
})
export class SharedModule { }
