import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/share/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  isError = false;
  msgError = '';
  isDisabled = false;
  isProd = true;
  showLoading = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.isProd = environment.production;
  }


  ngOnInit(): void {
    this.loadingService.spinner$.subscribe((data: boolean) => {
      this.showLoading = data;
    });
  }

  async onClickLogin() {
    try {
      this.isError = false;
      this.isDisabled = true;
      this.loadingService.showSpinner();
      const rs: any = await this.loginService.login(this.username, this.password);
      if (rs.ok) {
        this.loadingService.hideSpinner();
        sessionStorage.setItem('token', rs.token);
        this.router.navigateByUrl('/home')
      } else {
        this.loadingService.hideSpinner();
        this.isError = true;
        this.msgError = 'Invalid user name or password';
      }
      this.isDisabled = false;
    } catch (error) {
      this.loadingService.hideSpinner();
      this.isDisabled = false;
      this.isError = true;
      this.msgError = 'Server Error';
    }
  }

  onKeyLogin(e: any) {
    if (e.keyCode == 13) {
      this.onClickLogin();
    }
  }

}
