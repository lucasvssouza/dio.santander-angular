import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsService {
  private url = 'https://api.itbook.store/1.0/new';

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get(this.url);
  }
}
