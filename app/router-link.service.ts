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
      routerLink: '/',
      items: [
        {
          icon: PrimeIcons.FILE_IMPORT,
          label: "Import Data",
          routerLink: 'import'
        },
        {
          icon: PrimeIcons.FILE_EXPORT,
          label: 'Export Data',
          routerLink: 'export'
        },
        {
          icon: PrimeIcons.DATABASE,
          label: 'Backup Data',
          routerLink: 'backups'
        },
        {
          icon: PrimeIcons.UNDO,
          label: 'Restore Data',
          routerLink: 'restore'
        },
      ]
    },
    {
      label: 'Inventory',
      icon: PrimeIcons.WAREHOUSE,
      routerLink: 'inventory',
      items: [
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
        {
          icon: PrimeIcons.BOOK,
          label: 'Current Stock',
          routerLink: 'stock'
        },
      ]
    },
    {
      label: 'Sales',
      icon: PrimeIcons.BOOK,
      routerLink: 'sales',
      items: [
        {
          icon: PrimeIcons.LIST,
          label: 'Sales Order List',
          routerLink: 'sales'
        },
        {
          icon: PrimeIcons.PLUS,
          label: 'New Sales Order',
          routerLink: 'sales/new'
        }
      ]
    },
    {
      label: 'Purchasing',
      icon: PrimeIcons.RECEIPT,
      routerLink: 'purchases',
      items: [
        {
          icon: PrimeIcons.LIST,
          label: 'Purchase Order List',
          routerLink: 'purchases'
        },
        {
          icon: PrimeIcons.PLUS,
          label: 'New Purchase Order',
          routerLink: 'purchases/new'
        },
      ]
    },
    {
      label: 'Settings',
      icon: PrimeIcons.COG,
      routerLink: 'settings',
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
    }
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
