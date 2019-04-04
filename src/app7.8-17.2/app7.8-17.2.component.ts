import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app7.8-17.2.component.html'
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup;

  ngOnInit() {
  	this.form = new FormGroup({
  		email: new FormControl(''),
  		pass: new FormControl(''),
  		country: new FormControl('ru'),
  		answer: new FormControl('no')
  	});
  }

  onSubmit() {
  	console.log('Submited!', this.form);
  }
}
