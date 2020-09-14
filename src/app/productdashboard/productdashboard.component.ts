import { Component, OnInit } from '@angular/core';
import { ProductdataService } from "../productdata.service";

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {

  constructor(private dataservice:ProductdataService) { }

  product:any=[];

  getProductData(){
    this.dataservice.getData().subscribe((res)=>{
      this.product=res;
    })
  }

  delete(id){
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("Data Deleted Successfully!!!!")
      this.getProductData()
    });
  }

  ngOnInit(): void {
    this.getProductData();
  }

}
