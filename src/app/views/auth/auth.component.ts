import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  email!: string;
  password!: string;
  errMsg!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.email = 'email@email.com';
    this.password = '123456';
  }

  onClickSubmitForm() {
    this.errMsg = '';

    this.authService
      .signIn(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/products');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
