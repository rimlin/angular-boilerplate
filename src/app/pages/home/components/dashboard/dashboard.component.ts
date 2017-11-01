import { Component, ChangeDetectionStrategy, OnInit, Output, Input, EventEmitter, } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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

    files: Subject<any> = new Subject<any[]>();

    constructor() { }

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

    }

    public addItem() {
      this.handleAddItem.emit();
    }

    public onSelectImages(imageList) {
      let images = imageList.map((imageFile) => {
        return new Promise((resolve, reject) => {
          let imageSrc = window.URL.createObjectURL(imageFile);

          let img = new Image();
          img.onload = () => {
            resolve({
              heatmap: this._generate({ width: img.width, height: img.height }),
              image: {
                width: img.width,
                height: img.height,
                src: imageSrc,
              }
            });
          };

          img.src = imageSrc;
        });
      });

      Promise.all(images).then(result => {
        this.files.next(result);
      });
    }

    private _generate({ width, height }) {
      var points = [];
      var max = 0;
      var len = 200;

      while (len--) {
        var val = Math.floor(Math.random()*100);
        var radius = Math.floor(Math.random()*70);

        max = Math.max(max, val);
        var point = {
          x: Math.floor(Math.random()*width),
          y: Math.floor(Math.random()*height),
          value: val,
          radius: radius
        };

        points.push(point);
      }

      return {
        data: points,
        dataMax: max,
      }
    }
}
