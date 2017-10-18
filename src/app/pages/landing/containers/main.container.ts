import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'wf-main-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Main container: <wf-main></wf-main>
  `
})
export class MainContainer implements OnInit {
  constructor() { }

  ngOnInit() { }
}
