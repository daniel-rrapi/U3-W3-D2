import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  generi = ['uomo', 'donna', 'ermafrodita'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
    console.log('form inviato correttamente');
    this.form.reset();
  }
}
