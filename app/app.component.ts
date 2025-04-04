import { Component, inject, isDevMode } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MenubarModule } from "primeng/menubar";
import { RouterLinkService } from "./services/router-link.service";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-root',
    imports: [
        NgOptimizedImage,
        RouterOutlet,
        MenubarModule,
        NgIf,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  itemService: RouterLinkService = inject(RouterLinkService);
  items: MenuItem[] = []
  protected readonly isDevMode: boolean = true;

  constructor() {
    this.items = this.itemService.getRouterLinks();
  }


}
