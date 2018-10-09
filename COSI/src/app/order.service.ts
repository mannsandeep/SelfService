import { Injectable } from '@angular/core';

import { Order } from './order';
import { Orders } from './list-orders';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
	
	private ordersUrl = 'http://localhost:3000/orders';  // URL to web api

  constructor(private http: HttpClient,private messageService: MessageService) { }
  
  getOrders(): Observable<Order[]> {
	  // TODO: send the message _after_ fetching the heroes
 // this.messageService.add('OrderService: fetched Orders');
  //Orders =;
  // read REST api to get orders
  
  return this.http.get<Order[]>(this.ordersUrl).pipe(
      catchError(this.handleError('getOrders', []))
    );
  //return of(Orders);
}

getOrder(id: number): Observable<Order> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`OrderService: fetched order number=${id}`);
  //return of(Orders.find(order => order.OrderNumber === id));
   return this.http.get<Order>(this.ordersUrl).pipe(
      catchError(this.handleError('getOrders', id))
    );
}


/** Log a OrderService message with the MessageService */
private log(message: string) {
  this.messageService.add(`OrderService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
