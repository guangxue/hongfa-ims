import { Routes } from '@angular/router';
import { HomePageComponent } from "./homepage/homepage.component";
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from "./settings/settings.component";
import { StockComponent } from "./stock/stock.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ImportDataComponent } from "./import-data/import-data.component";
import { PurchasesOrderComponent } from "./purchases-order/purchases-order.component";
import { StockItemComponent } from "./stock-item/stock-item.component";
import {StockSiderbarComponent} from "./stock-siderbar/stock-siderbar.component";

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
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'stock/item/:code',
    component: StockItemComponent,
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
    path: "**",
    component: PageNotFoundComponent,
  }
];
