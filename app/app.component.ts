import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { RouterLinkService } from "./services/router-link.service";
import { MenuItem } from "primeng/api";
import { BirchDbService } from "./services/birchdb.service";
import { AppDataService } from "./services/appdata.service";
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    MenubarModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routerLinks = inject(RouterLinkService);
  birchDb = inject(BirchDbService);
  appData = inject(AppDataService)
  navs: MenuItem[] = []

  constructor() {
    this.navs = this.routerLinks.getRouterLinks();
    /*
    this.birchDb.getBirchStock().subscribe(items => {
      this.appData.set('inventory', JSON.stringify(items));
    })
    */
  }
}
