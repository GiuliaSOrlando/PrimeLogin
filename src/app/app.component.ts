import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  title = 'forms';
  isLogged!: boolean;
  constructor(private authSrv: AuthService) {
    this.authSrv.loggedStatus.subscribe((status) => (this.isLogged = status));
  }
  ngOnInit(): void {
    this.authSrv.verifyLogin();
    this.items = [
      { label: 'Profile page', icon: 'pi pi-fw pi-home' },
      { label: 'Login', icon: 'pi pi-fw pi-calendar', routerLink: '/login' },
      {
        label: 'Registrati',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/signup',
      },
      { label: 'Logout', icon: 'pi pi-fw pi-file' },
    ];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  logout() {
    this.authSrv.logout();
  }
}
