import { Component, ChangeDetectionStrategy, OnInit, Output, Input, EventEmitter, } from '@angular/core';

@Component({
    selector: 'wf-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @Input() items;
    @Input() lastSelectedItem;

    @Output() handleAddItem: EventEmitter<any> = new EventEmitter();

    dataMax: number = 0;
    data: any[] = [];
    width: number;
    height: number;

    constructor() { }

    ngOnInit() {
      var points = [];
      var max = 0;
      this.width = 750;
      this.height = 629;
      var len = 200;

      while (len--) {
        var val = Math.floor(Math.random()*100);
        var radius = Math.floor(Math.random()*70);

        max = Math.max(max, val);
        var point = {
          x: Math.floor(Math.random()*this.width),
          y: Math.floor(Math.random()*this.height),
          value: val,
          radius: radius
        };
        points.push(point);
      }

      // heatmap data format
      this.data = points;
      this.dataMax = max;
    }

    addItem() {
      this.handleAddItem.emit();
    }
}
