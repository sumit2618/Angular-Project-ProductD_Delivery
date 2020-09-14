import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

import { ActivatedRoute , Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {


  constructor(private dataservice:UserdataService , private router:Router ,  private activatedroute:ActivatedRoute) { }

  user:any=[];
  id:number;
  updateForm:FormGroup;

  register(){
    this.dataservice.updateData(this.id,this.updateForm.value).subscribe((res)=>{
      alert("Data Updated Successfully...");
      this.router.navigateByUrl("/admin");
    });
  }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.user = data;
        this.updateForm = new FormGroup({

          userName:new FormControl(this.user.userName),
          userEmail:new FormControl(this.user.userEmail),
          userAge:new FormControl(this.user.userAge),

          userPhoneNo:new FormControl(this.user.userPhoneNo),
          userAddress:new FormControl(this.user.userPassword),
          userPassword:new FormControl(this.user.userPassword)
        })
      })
    })
  }
}
