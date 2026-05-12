import { Component, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MenubarModule } from "primeng/menubar";
import { RouterLinkService } from "./services/router-link.service";
import { AuthService } from "./services/auth-service";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routerLinks = inject(RouterLinkService);
  authService = inject(AuthService);
  navs: MenuItem[] = []

  constructor() {
    this.navs = this.routerLinks.getRouterLinks();
  }
}