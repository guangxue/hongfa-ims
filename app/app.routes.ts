import { Routes } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { SalesOrderComponent } from "./sales-order/sales-order.component";

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
    path: 'sales-order/:orderNumber',
    component: SalesOrderComponent,
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'vendors',
    component: VendorsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
