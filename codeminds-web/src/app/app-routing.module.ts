import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '@shared/layout/main/main.layout';
const routes: Routes = [{
  path:'',
  component: MainLayout,
  children: [
    {
      path:'',
      loadChildren: () => import('@home/home.module').then((m) => m.HomeModule)
    }
  ] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
