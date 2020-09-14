import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { AdminprofileComponent } from "./adminprofile/adminprofile.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import {ProductdashboardComponent  } from "./productdashboard/productdashboard.component";
import { UserdashboardComponent } from "./userdashboard/userdashboard.component";
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"reg", component:UserComponent},
  {path:"log", component:LoginComponent},
  {path:"product", component:ProductComponent},
  {path:"user/:id", component:UserprofileComponent},
  {path:"admin/:id", component:AdminprofileComponent},
  {path:"udash", component:UserdashboardComponent},
  {path:"pdash", component:ProductdashboardComponent},
  {path:"up/:id", component:UpdateproductComponent},
  {path:"uu/:id", component:UpdateuserComponent},
  {path:"detail/:id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
