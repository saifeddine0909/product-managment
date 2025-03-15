import { ProductFormComponent } from './pages/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',redirectTo:'product-list',pathMatch:'full'
  },
  { path: '', component: ProductsComponent,
    children: [
      {path : 'product-list', component: ProductListComponent},
      {path : 'product-form', component: ProductFormComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
