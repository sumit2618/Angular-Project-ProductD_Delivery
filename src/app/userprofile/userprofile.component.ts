import { Component, OnInit } from '@angular/core';

import { UserdataService } from "../userdata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private dataservice:UserdataService, private router:Router ,  private activatedroute:ActivatedRoute) { }

  user:any;
  id:number;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.user = data;
      })
    })
  }
}
