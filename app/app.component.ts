import { Component, inject, isDevMode } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MenubarModule } from "primeng/menubar";
import { RouterLinkService } from "./service/router-link.service";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
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
  protected readonly isDevMode: boolean = isDevMode();

  constructor() {
    this.items = this.itemService.getRouterLinks();
  }


}
