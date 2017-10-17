import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wf-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @Input() items;

    constructor() { }

    ngOnInit() { }
}