import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ItemModel } from '../../../../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wf-dashboard-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() model: ItemModel;
  @Output() handleSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
