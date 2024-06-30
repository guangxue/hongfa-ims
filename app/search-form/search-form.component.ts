import { AfterContentInit, Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { ItemCodeListService } from "../service/item-code-list.service";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteCompleteEvent, AutoCompleteModule } from "primeng/autocomplete";
import { TreeSelectModule } from 'primeng/treeselect';
import { SelectItem, TreeNode } from "primeng/api";
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'search-form',
  standalone: true,
  imports: [
    FormsModule,
    NgTemplateOutlet,
    InputTextModule,
    TreeSelectModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ButtonModule,
    NgClass,
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

  @ViewChild('purchaseSeach')
  purchaseOrderSeachForm!: TemplateRef<any>;

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
  productCategoryOptions: TreeNode[] = [
    {label: 'PC3', data: 'PC3'},
    {label: 'INV3', data: 'INV3'},
    {label: 'PO5', data: 'PO5'},
  ];
  productStatus: SelectItem[] = [
    {label: 'Active', value: 'active'},
    {label: 'Inactive', value: 'inactive'},
    {label: 'Show All', value: 'showAll'},
  ]

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
      this.tmplRefs.set('purchases', this.purchaseOrderSeachForm);
      this.tmplRefName = this.tmplRefs.get(this.RefName) || null
    })
  }

  whenSubmitted(searchForm: NgForm) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
    console.log(this.products);
  }

}


