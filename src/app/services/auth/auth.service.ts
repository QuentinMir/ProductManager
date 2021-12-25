import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(email: string, password: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      if (email === 'email@email.com' && password === '123456') {
        this.token.next('ejrghrghgeirjng');
        res();
      } else {
        rej('c pa bon lol');
      }
    });
  }

  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
