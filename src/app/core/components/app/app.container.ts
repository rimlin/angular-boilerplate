import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, PlatformLocation } from '@angular/common';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
//import { Title, DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'wf-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppContainer implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //private titleService: Title,
    private platformLocation: PlatformLocation,
    //@Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      //if (navigator.platform.indexOf('Mac') > -1) {
      //  this.document.body.classList.add('__os-mac');
      //}
    }
  }
}
