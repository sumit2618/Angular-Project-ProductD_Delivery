import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import {ReactiveFormsModule} from '@angular/forms';
// for service registration
import {HttpClientModule} from '@angular/common/http';
import {ProductdataService} from './productdata.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { UserdataService } from "./userdata.service";
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    UserprofileComponent,
    AdminprofileComponent,
    UserdashboardComponent,
    ProductdashboardComponent,
    UpdateproductComponent,
    UpdateuserComponent,
    ProductdetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductdataService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
