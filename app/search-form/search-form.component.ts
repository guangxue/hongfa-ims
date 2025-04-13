import { AfterContentInit, Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { NgTemplateOutlet } from "@angular/common";
import { ItemCodeListService } from "../services/item-code-list.service";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteCompleteEvent, AutoCompleteModule } from "primeng/autocomplete";
import { TreeSelectModule } from 'primeng/treeselect';
import { ButtonModule } from 'primeng/button';
import { Select } from "primeng/select";

@Component({
    selector: 'search-form',
  imports: [
    FormsModule,
    NgTemplateOutlet,
    InputTextModule,
    TreeSelectModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ButtonModule,
    Select,
  ],
    templateUrl: './search-form.component.html',
    styleUrl: './search-form.component.css'
})
export class SearchFormComponent implements AfterContentInit {
  tmplRefName!: TemplateRef<any> | null;
  tmplRefs: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();

  @Input()
  RefName: string = "";

  @ViewChild('productSearch')
  productSearchForm!: TemplateRef<any>;

  @ViewChild('saleSearch')
  salesOrderSearchForm!: TemplateRef<any>;

  @ViewChild('purchaseSearch')
  purchaseOrderSearchForm!: TemplateRef<any>;

  loading: boolean = false;

  /** Product Search Form **/
  productService: ItemCodeListService = inject(ItemCodeListService);

  products = {
    itemCode: '',
    description: '',
    category: '',
    status: 'active',
  }
  productItemCodeList: string[] = [];
  productItemCodeSuggestions: string[] = [];
  productCategoryOptions = [
    {name: 'PC3', code: 'PC3'},
    {name: 'INV3', code: 'INV3'},
    {name: 'PO5', code: 'PO5'},
  ];
  statusOptions = [
    {name: 'Active', code: 'active'},
    {name: 'Inactive', code: 'inactive'},
    {name: 'Show All', code: 'all'},
  ]

  sales = {
    orderNum: '',
    status: '',
    customer: '',
  }

  constructor() {
    this.productItemCodeList = this.productService.getItemCodeArrayList();
  }

  filterSuggestions($event: AutoCompleteCompleteEvent, formName: string) {
    let query = $event.query;
    if (formName == 'products') {
      this.productItemCodeSuggestions = this.productItemCodeList.filter(code => code.includes(query));
    }
  }

  ngAfterContentInit() {
    Promise.resolve(null).then(() => {
      this.tmplRefs.set('inventory', this.productSearchForm);
      this.tmplRefs.set('sales', this.salesOrderSearchForm);
      this.tmplRefs.set('purchases', this.purchaseOrderSearchForm);
      this.tmplRefName = this.tmplRefs.get(this.RefName) || null
    })
  }

  whenSubmitted(searchForm: NgForm) {
    this.loading = true;
    console.log(searchForm.value)

    setTimeout(() => {
      this.loading = false
    }, 2000);
    console.log(this.products);
  }

}


