import { Injectable } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RouterLinkService {
  badge: string = "";
  menuLinks: MenuItem[] = [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      items: [
        {
          icon: PrimeIcons.FILE_IMPORT,
          label: "Import Data",
          routerLink: 'import-data'
        },
        {
          icon: PrimeIcons.FILE_EXPORT,
          label: 'Export Data',
          routerLink: 'export-data'
        },
        {
          icon: PrimeIcons.DATABASE,
          label: 'Backup Data',
          routerLink: 'backup-data'
        },
        {
          icon: PrimeIcons.UNDO,
          label: 'Restore Data',
          routerLink: 'restore-data'
        },
      ]
    },
    {
      label: 'Inventory',
      icon: PrimeIcons.WAREHOUSE,
      items: [
        {
          icon: PrimeIcons.BOOK,
          label: 'Current Stock',
          routerLink: 'stock'
        },
        {
          icon: PrimeIcons.CHECK_SQUARE,
          label: 'Movement History',
          routerLink: 'movements'
        },
        {
          icon: PrimeIcons.SLIDERS_H,
          label: 'Adjust Stock',
          routerLink: 'adjust'
        },
        {
          icon: PrimeIcons.PEN_TO_SQUARE,
          label: 'Reorder Stock',
          routerLink: 'reorder'
        },
      ]
    },
    {
      label: 'Sales',
      icon: PrimeIcons.BOOK,
      routerLink: 'sales',
    },
    {
      label: 'Purchases',
      icon: PrimeIcons.RECEIPT,
      routerLink: 'purchases',
    },
    {
      label: 'Settings',
      icon: PrimeIcons.COG,
      items: [
        {
          icon: PrimeIcons.TH_LARGE,
          label: 'General Setting',
          routerLink: 'settings'
        },
        {
          icon: PrimeIcons.PRINT,
          label: 'Print Setting',
          routerLink: 'settings/print'
        },
      ]
    },
    {
      label: 'Dashboard',
      icon: PrimeIcons.CHART_LINE,
      routerLink: 'dashboard',
    },
  ]

  constructor() {
  }

  getRouterLinks(): MenuItem[] {
    let dashboardLink: MenuItem = {
      label: '',
      icon: PrimeIcons.BELL,
      routerLink: 'messages',
    }
    if (this.badge.trim().length > 0) {
      dashboardLink.badge = '3';
      dashboardLink.badgeStyleClass = 'badge-indicator';
    }
    this.menuLinks.push(dashboardLink);
    return this.menuLinks;
  }
}
