import { Component } from '@angular/core';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  //https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html
  // firsth method <h1>{{ title }}</h1>
  template: `
  <div class="container">
    <div class="col-8 col-offset-2">

    <h1>{{ asyncTitle | async }}</h1>
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn btn-primary" (click)="addCar()">Добавить</button>
    <hr>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index">
          <b>{{ i + 1 }}</b> {{ car.name }} <i>{{ car.descr }}</i>
        </li>
      </ul>
    </div>
  </div>
  `
})
export class AppComponent {
  searchCar='';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    {name: 'Mazda', descr: 'WFM 2'},
    {name: 'Bently', descr: 'WFM 3'},
    {name: 'Audi', descr: 'WFM 4'},
    {name: 'Mercedes', descr: 'WFM 5'},
    {name: 'BMW', descr: 'WFM 6'}
  ]

  //title = '';

/*  asyncTitle = Observable.of('Async title 3 seconds')
    .delay(3000)
    .subscribe(str => this.title = str);*/

  // first method for async appear title
  /*asyncTitle = new Observable(observer => {
      setTimeout(() => { 
        observer.next('Async title 3 seconds');
      },
      3000);
  })
  .subscribe((str: string) => this.title = str);*/

  asyncTitle = new Observable(observer => {
      setTimeout(() => { 
        observer.next('Async title 3 seconds');
      }, 3000)
  });

  addCar() {
    this.cars.push({
      name: 'New Car',
      descr: 'WFM'
    });
  }
}
