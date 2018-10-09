import { Component, OnInit } from '@angular/core';
import { Order } from 'order';
import {Orders} from './list-orders';
import {OrderService} from '../order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
//title = 'Order Inquiry';
  
  constructor(private orderService: OrderService) { }
  orders: Order[];
  //selectedOrder: Order;

  
  ngOnInit() {
	  this.getOrders();
  }
  
  //getOrders(): void {
  //this.orders = this.orderService.getOrders();
  //}

  getOrders(): void {
  this.orderService.getOrders().subscribe(orders=>this.orders=orders);
}
  
  //orders = Orders;
  
  
  

/*onSelect(order: Order): void {
  this.selectedOrder = order;
}	*/

}
