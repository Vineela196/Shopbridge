import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories=["Mobiles","Books"];
   
    constructor(public product:ProductServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  save(f){
    let product={
      ...f
    };
    this.product.createProduct(product).subscribe(r=>{
      if(r){
        alert("Product created successfully");
        this.router.navigate(['/']);
      }
    })
  }

}
