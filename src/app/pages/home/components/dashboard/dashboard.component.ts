import { Component, ChangeDetectionStrategy, OnInit, Output, Input, EventEmitter, } from '@angular/core';

@Component({
    selector: 'wf-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @Input() items;

    @Output() handleAddItem: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    addItem() {
      this.handleAddItem.emit();
    }
}
