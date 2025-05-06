import { Routes } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { PurchasesOrderComponent } from './purchases-order/purchases-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { SalesSearchComponent } from './sales-search/sales-search.component';
import {SalesOrderComponent} from "./sales-order/sales-order.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
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
    path: 'inventory-item/:item_name',
    component: InventoryItemComponent,
  },
  {
    path: 'sales',
    component: SalesSearchComponent,
  },
  {
    path: 'sales-order/:order_number',
    component: SalesOrderComponent,
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
    children: [
      {
        path: 'order',
        component: PurchasesOrderComponent,
      },
    ],
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
    component: InventoryComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
