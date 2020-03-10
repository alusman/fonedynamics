import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/localstorage.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loading = false;
  public returnUrl: string;
  public invalidUsernamePassword = false;
  public readonly loginInfo: Login = new Login();

  constructor(
    private route: ActivatedRoute,
    private authservice: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  public ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.localStorage.getItemAsString('authInfo')) {
      this.router.navigate([this.returnUrl]);
    }
  }

  public login() {
    this.invalidUsernamePassword = false;
    this.loading = true;

    this.authservice.login(this.loginInfo.username, this.loginInfo.password).subscribe(res => {
      if (res) {
        this.loading = false;
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }
}
