import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { ErrorComponent } from './views/error/error.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NewProductComponent } from './views/new-product/new-product.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsListComponent,
  },
  {
    path: 'products/new',
    canActivate: [AuthGuard],
    component: NewProductComponent,
  },
  {
    path: 'products/:id',
    canActivate: [AuthGuard],
    component: SingleProductComponent,
  },
  {
    path: 'products/edit/:id',
    canActivate: [AuthGuard],
    component: EditProductComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
