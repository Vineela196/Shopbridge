import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from  '@angular/forms';

import { ProductServiceService } from './product-service.service';
import { DataTableModule } from 'angular5-data-table';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminproductComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'adminproducts',component:AdminproductComponent},
      {path:'products/new',component:ProductFormComponent},
      {path:'admin/products/:id', component:ProductFormComponent}
    ]),
    NgbModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
