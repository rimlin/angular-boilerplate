import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as dashboard from '../../../actions/dashboard';
import * as fromHome from '../../../reducers';
import { ItemModel } from '../../../../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wf-dashboard-item-container',
  template: `
    <wf-dashboard-item
      (handleSelect)="onSelect()"
      [model]="itemModel">
    </wf-dashboard-item>
  `
})
export class DashboardItemContainer implements OnInit {
  @Input() itemModel: ItemModel;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit() { }

  onSelect() {
    this.store.dispatch(new dashboard.ToggleSelect(this.itemModel.id));
  }
}
