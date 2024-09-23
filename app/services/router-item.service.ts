import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouterItemService {

  constructor() { }

  routerState = new BehaviorSubject<boolean>(false);

  updateRouterState(state: boolean) {
    this.routerState.next(state);
  }
}
