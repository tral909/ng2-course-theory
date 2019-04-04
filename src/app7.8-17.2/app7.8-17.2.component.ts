import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app7.8-17.2.component.html',
  styleUrls: ['./app7.8-17.2.component.css']
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
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
      }),
  		country: new FormControl('ru'),
  		answer: new FormControl('no')
  	});
  }

  onSubmit() {
  	console.log('Submited!', this.form);
  }
}
