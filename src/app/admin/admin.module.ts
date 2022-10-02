import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateblogComponent } from './createblog/createblog.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateblogComponent,
    
    DashbordComponent,
    DisplayComponent,
    DisplaycategoryComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    CreatecategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,

  ],
  exports:[
    DashbordComponent,
    DisplayComponent,
    EditblogComponent,
  ]
})
export class AdminModule { }
