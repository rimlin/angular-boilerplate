import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wf-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @Input() items;

    constructor() { }

    ngOnInit() { }
}
