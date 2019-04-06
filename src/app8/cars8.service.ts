import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
    constructor(private http: HttpClient) {}

    getCars()/*: Observable<any>*/ {
        return this.http.get('http://localhost:3000/cars');
    }
}