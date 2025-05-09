import {Component, inject} from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MenubarModule } from "primeng/menubar";
import { RouterLinkService } from "./services/router-link.service";
import { MenuItem } from "primeng/api";
import {BirchService} from "./services/birch.service";
import {LocalStorageService} from "./services/local-storage.service";

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
  routerLinks: RouterLinkService = inject(RouterLinkService);
  birchService: BirchService = inject(BirchService);
  localStorage = inject(LocalStorageService)
  navs: MenuItem[] = []

  protected readonly isDevMode: boolean = true;

  constructor() {
    this.navs = this.routerLinks.getRouterLinks();
    this.birchService.getBirchItems().subscribe(items => {
      this.localStorage.set('inventory', JSON.stringify(items));
    })
  }


}
