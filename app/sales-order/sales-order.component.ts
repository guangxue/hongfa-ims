import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import {TableModule} from "primeng/table";
import {NgOptimizedImage} from "@angular/common";
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

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
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css',
})
export class SalesOrderComponent implements AfterContentInit {
  protected orderNumber: string | null = null;
  orderItems: any[] = [];

  constructor(private route: ActivatedRoute, private localstorage: LocalStorageService,) {
    this.route.paramMap.subscribe(url => {
      this.orderNumber = url.get('orderNumber');
    })
    let order = this.localstorage.get('sales-order')
    if (order) {
      let orderData = JSON.parse((order));
      if(this.orderNumber == orderData.orderNumber) {
        this.orderItems = orderData.orderItems;
      }
    }
  }

  ngAfterContentInit(): void {
    console.info('ngAfterContentInit() done');
    if(this.orderItems.length == 0){
      this.orderItems = [
        {
          item: '011253',
          line: '1',
          description: 'BAG SUIT PREMIUM 60 X 98CM BLACK',
          qty: "100",
          unit: "EA"
        },
        {
          item: '011254',
          line: '2',
          description: 'BAG DRESS OR COAT PREMIUM 60 X 136CM BLACK',
          qty: "100",
          unit: "EA"
        }
      ]
      console.error('No sales data:', this.orderNumber);
    }
  }

  createPickList() {
    console.log("Creating Pick List: with data below");
    console.log(this.orderItems);
  }
}
