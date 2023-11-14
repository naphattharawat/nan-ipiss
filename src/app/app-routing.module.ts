import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ObjectsComponent } from './plan/objects/objects.component';
import { ProjectsComponent } from './plan/projects/projects.component';
import { PurchaseOrderComponent } from './purchase/purchase-order/purchase-order.component';
import { StockcardComponent } from './store/stockcard/stockcard.component';
import { HomeComponent } from './home/home.component';
import { authenGuard } from './guard/authen.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authenGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'plan', children: [
          { path: '', redirectTo: 'objects', pathMatch: 'full' },
          { path: 'objects', component: ObjectsComponent },
          { path: 'projects', component: ProjectsComponent }
        ]
      },
      {
        path: 'purchase', children: [
          { path: '', redirectTo: 'orders', pathMatch: 'full' },
          { path: 'orders', component: PurchaseOrderComponent },
        ]
      },
      {
        path: 'store', children: [
          { path: '', redirectTo: 'stockcard', pathMatch: 'full' },
          { path: 'stockcard', component: StockcardComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
