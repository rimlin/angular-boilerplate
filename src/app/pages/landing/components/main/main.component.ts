import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'wf-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
