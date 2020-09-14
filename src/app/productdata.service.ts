import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";


const api="http://localhost:5555/product/";

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private httpclient:HttpClient) { }

  saveData(data){
     return this.httpclient.post(api,data)
  }

  getData(){
    return this.httpclient.get(api)
  }

  deleteData(id){
    return this.httpclient.delete(api+id);
  }

  getDataById(id){
    return this.httpclient.get(api+id)
  }

  updateData(id,data){
    return this.httpclient.put(api+id,data);
  }

}
