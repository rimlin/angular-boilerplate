import {
  Component,
  AfterViewInit,
  Input,
  Inject,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

import * as h337 from 'heatmap.js/build/heatmap.js';

const DEFAULT_CONFIG = {
    radius: 10,
    maxOpacity: .5,
    minOpacity: 0,
    blur: .75
};
const DEFAULT_DATA_MIN = 0;
const DEFAULT_DATA_MAX = 10;

@Component({
    selector: 'wf-heatmap',
    styleUrls: ['./heatmap.component.scss'],
    template: `
      <div
        class="heatmap"
        #heatmap
        [ngStyle]="{
          width: width ? width + 'px' : '100%',
          height: height ? height + 'px' : '100%',
          'background-image': 'url(' + img + ')'
        }">
      </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements AfterViewInit, OnChanges {
    @Input() data: any[] = [];
    @Input() config: any = {};
    @Input() img: string;
    @Input() width: number;
    @Input() height: number;
    @Input() dataMin: number = DEFAULT_DATA_MIN;
    @Input() dataMax: number = DEFAULT_DATA_MAX;
    @ViewChild('heatmap') container: ElementRef;

    private heatmapInstance;

    constructor(@Inject(PLATFORM_ID) private platformId) {}

    ngAfterViewInit() {
      if (isPlatformServer(this.platformId)) {
        return;
      }

      let element = this.container.nativeElement;
      let width = this.width || element.offsetWidth;
      let height = this.height || element.offsetHeight;
      let config = Object.assign({container: element}, DEFAULT_CONFIG, {width, height}, this.config);
      this.heatmapInstance = h337.create(config);
      this.setHeatmapData();
    }

    ngOnChanges(changes: SimpleChanges) {
      if (isPlatformServer(this.platformId)) {
        return;
      }

      if (changes['data'] && this.heatmapInstance) {
          this.setHeatmapData();
      }
    }

    setHeatmapData() {
      if (isPlatformServer(this.platformId)) {
        return;
      }

      let data = { min: this.dataMin, max: this.dataMax, data: this.data };
      this.heatmapInstance.setData(data);
    }

}
