import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as dashboard from '../actions/dashboard';
import { ItemModel } from '../../../shared/models';
import { IItem } from '../../../shared/interfaces/item.interface';

@Injectable()
export class DashboardEffects {
  @Effect()
  addItem$: Observable<Action> = this.actions$
    .ofType<dashboard.LoadItem>(dashboard.LOAD_ITEM)
    .map(action => action.payload)
    .switchMap(itemId => {
      return Observable.of(new dashboard.AddItem({ id: itemId, name: `Effect ${itemId}` }));
    });

  constructor(
    private actions$: Actions,
  ) {}
}
