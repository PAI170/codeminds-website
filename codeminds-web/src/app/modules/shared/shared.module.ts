import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layout/main/main.layout';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    MainLayout,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SliderComponent,
  ],
  exports: [
    SliderComponent
  ],
})
export class SharedModule { }
