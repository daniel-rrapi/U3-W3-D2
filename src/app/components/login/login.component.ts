import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm = {
    email: '',
    password: '',
  };

  // user: any = {
  //   email: '',
  //   password: '',
  // };
  constructor() {}

  @ViewChild('form', { static: true }) form!: NgForm;
  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('stato del form: ', status);
    });
  }

  submit() {
    console.log('form inviato ', this.form);
    this.form.reset();
  }
}
