import { Component, OnInit } from '@angular/core';
import { ProductdataService } from "../productdata.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productservice:ProductdataService) { }

  product:any=[];
  getProductData(){
    this.productservice.getData().subscribe((res)=>{
      this.product=res;
    })
  }

  ngOnInit(): void {
    this.getProductData();
  }
}
