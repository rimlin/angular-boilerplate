import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromHome from '../reducers';
import { ItemModel } from '../../../shared/models';
import * as dashboard from '../actions/dashboard';

@Component({
  selector: 'wf-dashboard-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Items:
    <wf-dashboard
      (handleAddItem)="onAddItem()"
      [lastSelectedItem]="lastSelect"
      [items]="items$ | async">
    </wf-dashboard>
  `
})
export class DashboardContainer implements OnInit {
  items$: Observable<ItemModel[]>;

  lastSelect: ItemModel;
  length: number = 0;

  constructor(private store: Store<fromHome.State>) {
    this.store.dispatch(new dashboard.LoadItem(1));

    this.items$ = store.select(fromHome.getAllDashboardItems);
    this.items$.subscribe((res) => {
      this.length = res.length;
    });

    store.select(fromHome.getSelectedItem).subscribe(itemModel => {
      this.lastSelect = itemModel;
    });
  }

  ngOnInit() {

  }

  onAddItem() {
    let id = this.length + 1;

    this.store.dispatch(new dashboard.AddItem({
      id,
      name: `Item #${id}`
    }));
  }
}
