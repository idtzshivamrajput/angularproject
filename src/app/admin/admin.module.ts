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
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { ContactdisplayComponent } from './contactdisplay/contactdisplay.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationdisplayComponent } from './registrationdisplay/registrationdisplay.component';


@NgModule({
  declarations: [
    CreateblogComponent,
    DashbordComponent,
    DisplayComponent,
    DisplaycategoryComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    CreatecategoryComponent,
    AboutusComponent,
    CategorydisplayComponent,
    ContactdisplayComponent,
    RegistrationComponent,
    RegistrationdisplayComponent
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
    DisplaycategoryComponent,
    CreateblogComponent,
    CreatecategoryComponent,
    SidebarComponent,
    ViewComponent,
    ContactdisplayComponent,
    CategorydisplayComponent,
    RegistrationComponent,
    EditblogComponent,
  ]
})
export class AdminModule { }
