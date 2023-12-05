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

  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        username: this.fb.control(null)
        email: this.fb.control(null, [
          Validators.required, Validators.email,
        ])
      })
      genere: this.form.control('donna')
    })
  }

  submit() {
    console.log(this.form);
    console.log('form inviato correttamente');
    this.form.reset();
  }
}
