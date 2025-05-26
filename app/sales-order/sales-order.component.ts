import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';
import {TableModule} from "primeng/table";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Tag} from "primeng/tag";
import {ToggleSwitch, ToggleSwitchChangeEvent} from "primeng/toggleswitch";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";

@Component({
  selector: 'sales-order',
  imports: [
    TableModule,
    NgOptimizedImage,
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    InputText,
    FormsModule,
    Tag,
    ToggleSwitch,
    NgStyle,
    IconField,
    InputIcon,
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css',
})
export class SalesOrderComponent {
  protected orderNumber: string | null = null;
  salesOrderTableData: any[] = [];
  salesOrderItemsData: any[] = [];
  pickData: any[] = [];
  toggled: boolean = false;

  constructor(private route: ActivatedRoute, private localstorage: LocalStorageService) {
    this.route.paramMap.subscribe(url => {
      this.orderNumber = url.get('orderNumber');
    })
    let salesOrderNum= this.localstorage.get('order-number')
    let salesOrderData = this.localstorage.get('order-data')
    if (salesOrderNum && salesOrderData) {
      if(this.orderNumber == JSON.parse(salesOrderNum)) {
        this.salesOrderItemsData = JSON.parse(salesOrderData);
        this.salesOrderItemsData.forEach(item => {
          if(item.qty % 50 !== 0 && item.unit == 'EA') {
            item.status = 'check';
          } else {
            item.status = '';
          }
        })
        this.salesOrderTableData = this.salesOrderItemsData;
      } else {
        console.error("Sales order number not found.");
      }
    }
  }

  createPickList() {
    let inv = this.localstorage.get('inventory')
    let inventory: any[] = []
    if (inv) { inventory = JSON.parse(inv); }
    this.salesOrderTableData.forEach(item => {
      let order = {item: item.item, qty: item.qty, desc: item.desc, unit: item.unit};
      let foundCode = {}
      inventory.forEach(stock=> {
        if (stock.item_name == item.item) {
          foundCode = {code: stock.item_code}
        }
      })
      let po = {...order, ...foundCode}
      this.pickData.push(po)
    })
    this.localstorage.set('order-data', JSON.stringify(this.pickData))
  }
  editCompleted(enteredValues: string, order: any) {
    if(enteredValues.includes("*")) {
      const [v1, v2] = enteredValues.split("*");
      order.qty = Number(v1) * Number(v2);
    }
  }

  toggledChange($event: ToggleSwitchChangeEvent) {
    this.toggled = $event.checked;
    if(this.toggled) {
      this.salesOrderTableData = this.salesOrderItemsData.filter(item => item.status == 'check');
    }else {
      this.salesOrderTableData = this.salesOrderItemsData;
    }
  }
}
