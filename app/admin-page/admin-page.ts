import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { Home } from "@primeicons/angular/home"
@Component({
  selector: 'admin-page',
  imports: [
    SidebarModule,
    RouterOutlet,
    Home
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  items: any[] = [
    {
      label: 'Users',
      icon: 'pi pi-users',
      items: [
        { label: 'Add User', icon: 'pi pi-user-plus', routerLink: ['/admin/users/add'] },
        { label: 'Edit User', icon: 'pi pi-user-edit' },
        { label: 'Delete User', icon: 'pi pi-user-minus' },
      ],
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        { label: 'General Settings', icon: 'pi pi-sliders-h' },
        { label: 'Security Settings', icon: 'pi pi-shield' },
      ],
    },
  ];
}
