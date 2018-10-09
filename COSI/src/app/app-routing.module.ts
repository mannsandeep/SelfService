import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrdersComponent }      from './orders/orders.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
//import { CommonModule } from '@angular/common';

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'detail/:id',component:OrderDetailComponent}
];
  @NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports:[RouterModule]
	})


export class AppRoutingModule {

	}