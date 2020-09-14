import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';

import { Product } from "./product";

import { ProductdataService } from "../productdata.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  productForm:FormGroup

  constructor(private productservice:ProductdataService) { }

  register(){

    this.productservice.saveData(this.productForm.value).subscribe((res)=>{
      alert("Product Saved successfully...!")

    })
  }


  ngOnInit(): void {

    this.productForm=new FormGroup({
      productName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),  // student_name,etc is the name of HTML control
      productPrice:new FormControl(""),
      productColor:new FormControl(""),
      productType:new FormControl(""),
      productQuantity:new FormControl(""),
      productImage:new FormControl(""),
    })
  }
}
