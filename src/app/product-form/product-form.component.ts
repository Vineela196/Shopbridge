import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product;
  id;
  categories=["Mobiles","Books"];

   
    constructor(public productser:ProductServiceService, private router: Router, private route: ActivatedRoute) { 
      this.id= this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.productser.getProductById(this.id).subscribe(r=>{this.product=r;console.log(this.product,"from form component")});
      }
    }

  ngOnInit(): void {
    if(!this.product){
      this.product={};
    }
  }
  save(f){
    let product={
      ...f
    };
    this.productser.createProduct(product).subscribe(r=>{
      if(r){
        alert("Product created successfully");
        this.router.navigate(['/']);
      }
    })
  }

}
