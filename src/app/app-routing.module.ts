import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { Work2Component } from './work2/work2.component';

const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'work' ,component:WorkComponent},
  {path:'work2' ,component:Work2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
