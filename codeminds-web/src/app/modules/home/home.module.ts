import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CarouselModule } from '@coreui/angular';



@NgModule({
  declarations: [
    HomePage,
    CursosComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule {}
