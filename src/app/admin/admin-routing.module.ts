import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';

const routes: Routes = [

  {
    path:'admin-dashboard',
    component:DashbordComponent
  },
  {
    path:'admin-createblog',
    component:CreateblogComponent
  },
  {
    path:'admin-dashboard',
    component:DashbordComponent
  },
  {
    path:'admin-display',
    component:DisplayComponent
  },
  {
    path:'admin-displaycategory',
    component:DisplaycategoryComponent
  },
  {
    path:'admin-editblog',
    component:EditblogComponent
  },
  {
    path:'admin-createcategory',
    component:CreatecategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
