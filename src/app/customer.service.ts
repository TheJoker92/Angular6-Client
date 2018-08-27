import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private customersUrl = 'http://localhost:8080/server/data';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    this.messageService.add('CustomerService: fetched customers');
    return this.http.get<Customer[]>(this.customersUrl, this.httpOptions);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }
}
