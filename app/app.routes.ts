import { Routes } from '@angular/router';
import { PurchasesComponent } from './purchases/purchases.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { SalesOrderComponent } from "./sales-order/sales-order.component";
import { LoginPage } from './login-page/login-page';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import { roleGuard } from './guards/role-guard';
import { AuthService } from './services/auth-service';
import { inject } from '@angular/core';
import { authGuard } from './guards/auth-guard';
import { AdminUsersAdd } from './admin-users-add/admin-users-add';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      const authService = inject(AuthService);
      const role = authService.getUserRole();
      if (role === 'ADM') {
        return 'admin'
      } else if (role === 'USR' || role === 'GST') {
        return 'home';
      } else {
        return 'login';
      }
    },
  },
  {
    path: 'admin',
    component: AdminPage,
    canActivate: [roleGuard],
    children: [
      {
        path: 'users/add',
        component: AdminUsersAdd,
      }
    ]
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [authGuard]
  },
  { path: 'import-data', component: ImportDataComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'inventory-item/:item_name', component: InventoryItemComponent },
  { path: 'sales-order/:orderNumber', component: SalesOrderComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '**', component: PageNotFoundComponent },
];
