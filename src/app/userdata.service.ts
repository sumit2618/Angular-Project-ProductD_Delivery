import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:8888/user/"; //api is global

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) { }

  saveData(data){
    return this.httpClient.post(api,data)
  }
  getData(){
    return this.httpClient.get(api)
  }

  deleteData(id)
  {
    return this.httpClient.delete(api+id);
  }

  getDataById(id){
    return this.httpClient.get(api+id)
  }

  updateData(id,data){
    return this.httpClient.put(api+id,data);
  }


}
