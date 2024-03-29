import { Injectable } from '@angular/core';
import { LoginForm } from '@pages/login/shared/interface/login-form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private message: NzMessageService,
              private router: Router,
              private cookie: CookieService,
              ) { }

  public login({ email, password }: LoginForm): void {
    if (email === 'admin@admin.com' && password === 'admin') {
      this.cookie.set('token', '1');
      this.router.navigate(['publication']);
      return;
    }

    this.message.error('Invalid email or password');
  }

  public logout() {
    this.cookie.delete('token');
    this.router.navigate(['login']);
  }
}
