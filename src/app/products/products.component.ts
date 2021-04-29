import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[];
  temp:any;
  categories=["All Categories","Mobiles","Books"];
  constructor(public productser:ProductServiceService) { }

  ngOnInit(): void {
    this.productser.getProducts().subscribe(r=>{
      if(r.code==200){
        this.products=this.temp=r.products;
      }
    })
  }

  categoryChanged=(category)=>{
    this.products=(category=="All Categories")?this.temp:this.temp.filter(p=>p.category === category);
  }

}
