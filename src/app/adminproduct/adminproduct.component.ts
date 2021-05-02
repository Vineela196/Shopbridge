import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { ProductServiceService} from './../product-service.service';
import { Product} from './../Model/product';
@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {

  products;
  subscription: any;
 tableResource:DataTableResource<Product>;
  items= [];
  itemCount: number;

  constructor(private productService: ProductServiceService) {
    this.subscription=this.productService.getProducts()
    .subscribe(products => {
      this.products = products.products;
      this.initializeTable(products);
    });
    }
    
   private initializeTable(products){
    this.tableResource = new DataTableResource(products);
    this.items=this.products;
    // this.tableResource.query({ offset: 0 })
    //    .then(items => this.items = items);
    // this.tableResource.count()
    //     .then(count => this.itemCount = count);
   }
   
     reloadItems(params){
       if (!this.tableResource) return;

      this.tableResource.query(params)
      .then(items => this.items = items);
     }
   
  //  filter(query:string){
  //    let filteredProducts = (query) ?
  //       this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) : 
  //       this.products;

  //     this.initializeTable(filteredProducts);
  //  }
  ngOnInit() {
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
