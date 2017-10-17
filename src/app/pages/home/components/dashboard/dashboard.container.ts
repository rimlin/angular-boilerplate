import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromHome from '../../reducers';
import { ItemModel } from '../../../../shared/models';

@Component({
  selector: 'wf-dashboard-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Items: 
    <wf-dashboard [items]="items$ | async"></wf-dashboard>
  `
})
export class DashboardContainer implements OnInit {
  items$: Observable<ItemModel[]>;

  constructor(private store: Store<fromHome.State>) {
    this.items$ = store.select(fromHome.getAllDashboardItems);
  }

  ngOnInit() {
      
  }
}
