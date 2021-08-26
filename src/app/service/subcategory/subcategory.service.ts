import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient,private url:UrlService) { }

  liveurl=this.url.url
  
  

  getsubcategory(){

    return this.http.get(`${this.liveurl}/api/LogTicket/SubCategoryList`).toPromise()
    
  }

  getlist(){
    return this.http.get(`${this.liveurl}/api/LogTicket/ItemList`).toPromise()
  }


}