import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { User } from "./user";
import { UserdataService } from "../userdata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userdataservice:UserdataService , private router:Router) { }

  userForm:FormGroup;

  register(){
    this.userdataservice.saveData(this.userForm.value).subscribe((res)=>{
      alert("User Created Successfully...!")
      this.router.navigateByUrl("user")
    })
  }

  // register(){
  //   this.dataservice.saveData(this.form.value).subscribe((res)=>{
  //     alert("Data Saved Successfully...");
  //     this.router.navigateByUrl("/")
  //   });

  ngOnInit(): void {

    this.userForm = new FormGroup({
      userName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),
      userEmail:new FormControl(""),
      userAge:new FormControl(""),

      userPhoneNo:new FormControl(""),
      userAddress:new FormControl(""),
      userPassword:new FormControl("")
    })

  }

}
