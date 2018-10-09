import { Component, OnInit } from '@angular/core';
import { Order } from './Order';
import { OrderService } from '../Order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

orders: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
	  this.getOrders();
  }
  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders.slice(1, 5));
  }

}
