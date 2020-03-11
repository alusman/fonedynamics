import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/localstorage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authservice: AuthService,
    private router: Router,
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.localStorage.getItemAsString('authInfo')) {
      this.router.navigate([this.returnUrl]);
    }

    this.createForm();
  }

  public createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authservice.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(res => {
      if (res) {
        this.loading = false;
        this.router.navigateByUrl(this.returnUrl);
      }
    },
    error => {
      this.loading = false;
    });
  }
}
