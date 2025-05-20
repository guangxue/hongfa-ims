import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';
import {TableEditCompleteEvent, TableModule} from "primeng/table";
import {NgOptimizedImage} from "@angular/common";
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {BirchService} from "../services/birch.service";
import {Tag} from "primeng/tag";

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
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css',
})
export class SalesOrderComponent {
  protected orderNumber: string | null = null;
  orderItems: any[] = [];
  pickData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private localstorage: LocalStorageService,
    private birchService: BirchService,)
  {
    this.route.paramMap.subscribe(url => {
      this.orderNumber = url.get('orderNumber');
    })
    let order = this.localstorage.get('sales-order')
    if (order) {
      let orderData = JSON.parse((order));
      if(this.orderNumber == orderData.orderNumber) {
        this.orderItems = orderData.orderItems;
        this.orderItems.forEach(item => {
          if(item.qty % 50 !== 0 || item.unit !== 'EA') {
            item.status = 'check'
          } else {
            item.status = ''
          }
        })
      }
    }
  }


  createPickList() {
    console.log("Creating Pick List: with data below");
    let inv = this.localstorage.get('inventory')
    let inventory: any[] = []
    if (inv) { inventory = JSON.parse(inv); }
    this.orderItems.forEach(item => {
      let order = {item: item.item, qty: item.qty, desc: item.description};
      let foundCode = {}
      inventory.forEach(stock=> {
        if (stock.item_name == item.item) {
          foundCode = {code: stock.item_code}
        }
      })
      let po = {...order, ...foundCode}
      this.pickData.push(po)
    })

  }
  editCompleted(enteredValues: string, order: any) {
    if(enteredValues.includes("*")) {
      const [v1, v2] = enteredValues.split("*");
      order.qty = Number(v1) * Number(v2);
    }

  }
}
