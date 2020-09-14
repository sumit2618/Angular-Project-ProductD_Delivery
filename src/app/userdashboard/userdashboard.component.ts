import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../userdata.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private dataservice:UserdataService) { }

  user:any=[];

  getUserData(){
    this.dataservice.getData().subscribe((res)=>{
      this.user=res;
    })
  }


  delete(id){
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("Data Deleted Successfully!!!!")
      this.getUserData();
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
