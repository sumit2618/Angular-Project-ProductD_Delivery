import { Component, OnInit } from '@angular/core';
import { ProductdataService } from "../productdata.service";

import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private dataservice:ProductdataService , private router:Router ,  private activatedroute:ActivatedRoute) { }

  product:any=[];
  id:number;
  updateForm:FormGroup;;

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
        this.product = data;
        this.updateForm = new FormGroup({
          productName:new FormControl(this.product.productName),  // student_name,etc is the name of HTML control
          productPrice:new FormControl(this.product.productPrice),
          productColor:new FormControl(this.product.productColor),
          productType:new FormControl(this.product.productType),
          productQuantity:new FormControl(this.product.productQuantity),
          productImage:new FormControl(this.product.productImage)
        })
      })
    })
  }
}
