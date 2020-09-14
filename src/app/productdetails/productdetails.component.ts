import { Component, OnInit } from '@angular/core';
import { ProductdataService } from "../productdata.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from "../product/product";
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  constructor(private dataservice:ProductdataService,private router:Router ,  private activatedroute:ActivatedRoute) { }

  product:any;
  id:number;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.product = data;
      })
    })
  }
}
