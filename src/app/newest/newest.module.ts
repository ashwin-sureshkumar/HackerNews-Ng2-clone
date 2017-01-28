import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module'
import { NewestComponent } from './containers/newest/newest.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [NewestComponent]
})
export class NewestModule { }
