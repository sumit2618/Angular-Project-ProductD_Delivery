import { Component, OnInit } from '@angular/core';

import { UserdataService } from "../userdata.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  constructor(private dataservice:UserdataService, private router:Router ,  private activatedroute:ActivatedRoute) { }

  user:any;
  id:number;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.user = data;
        console.log(data)
      })
    })
  }

}
