import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../service/subcategory/subcategory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private subcategory:SubcategoryService) { }

  ngOnInit(): void {

    this.getsubcategory()
    this.getlist()


  }

  htmlContent:any;

  async getsubcategory(){
    const response:any= await this.subcategory.getsubcategory()
    console.log(response);
  }

  async getlist(){
    const res:any= await this.subcategory.getlist()
    console.log(res);
  }
}
