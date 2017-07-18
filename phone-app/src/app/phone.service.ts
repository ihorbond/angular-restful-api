import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
BASE_URL: string = "http://localhost:3000";

  constructor(private http: Http) { }

getList() {
  return this.http.get(`${this.BASE_URL}/api/phones`)
  .map(res => res.json()); //isn't it already returns JSON ??
}

getOne(id) {
  return this.http.get(`${this.BASE_URL}/api/phones/find/${id}`)
  .map(res => res.json());
}

remove(id) {
  return this.http.delete(`${this.BASE_URL}/api/phones/delete/${id}`)
  .map(res => res.json());
}

}
