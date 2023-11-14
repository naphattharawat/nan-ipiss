import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  demoCollapsible = false;
  constructor(private router: Router) {
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login')

  }
}
