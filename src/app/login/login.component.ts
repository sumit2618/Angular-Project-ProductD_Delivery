import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../userdata.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from "../user/user";
import { Login } from "../login/login";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserdataService, private router: Router) { }

  um: string = "admin@123";
  up: string = "123";
  adminid: number = 3

  count: number = 0

  umail: string;
  upwd: string;

  userForm: FormGroup;

  i: number = 0;

  user: any = [];

  getUserData() {
    this.userservice.getData().subscribe((res) => {
      this.user = res;
    })
  }

  ngOnInit(): void {
    this.getUserData();
    this.userForm = new FormGroup({
      umail: new FormControl(""),
      upwd: new FormControl("")
    })
  }

  register() {
      if (this.userForm.value.umail == this.um && this.userForm.value.upwd == this.up) {
        alert(" Admin Login Successfully..!");
        this.router.navigate(['/admin',this.adminid]);
      } else {
        for (this.i = 0; this.i <this.user.length; this.i++) {

          if (this.userForm.value.umail == this.user[this.i].userEmail && this.userForm.value.upwd == this.user[this.i].userPassword) {
            alert("User login Success...!");
            this.router.navigate(['/user', this.user[this.i].id]);
          }else {
            this.count++;
          }
        }
        if(this.count==this.user.length){
          alert("User Not Found Please Register First")
        }
      }

  }
}
