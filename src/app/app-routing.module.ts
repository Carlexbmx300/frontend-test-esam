import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';

const routes: Routes = [
  {
    
    path:'',
    component: AppComponent,
    children: [
      {path:"", redirectTo:"home", pathMatch:"full"},
      {path:"home", component:MainMenuComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
