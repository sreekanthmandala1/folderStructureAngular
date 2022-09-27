import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'owlcarousel2', loadChildren: () => import('./components/owlcarousel2/owlcarousel2.module').then(m => m.Owlcarousel2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
