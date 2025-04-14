import { Routes } from '@angular/router';
import { HomePageComponent } from "./homepage/homepage.component";
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from "./settings/settings.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ImportDataComponent } from "./import-data/import-data.component";
import { PurchasesOrderComponent } from "./purchases-order/purchases-order.component";
import { InventoryTableComponent } from "./inventory-table/inventory-table.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { InventoryItemComponent } from "./inventory-item/inventory-item.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: "full",
  },
  {
    path: 'import-data',
    component: ImportDataComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'inventory/:item_name',
    component: InventoryItemComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
    children: [
      {
        path: 'order',
        component: PurchasesOrderComponent,
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'vendors',
    component: VendorsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'messages',
    component: InventoryTableComponent,

  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
