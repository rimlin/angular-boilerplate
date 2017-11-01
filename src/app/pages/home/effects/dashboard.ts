import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import find from 'lodash-es/find';

import * as fromHome from '../reducers';
import * as dashboard from '../actions/dashboard';
import { ItemModel } from '../../../shared/models';
import { IItem } from '../../../shared/interfaces/item.interface';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffects {
  @Effect()
  loadItem$: Observable<Action> = this.actions$
    .ofType<dashboard.LoadItem>(dashboard.LOAD_ITEM)
    .map(action => action.payload)
    .switchMap(itemId => {
      return this.dashboardService
        .loadItem(itemId)
        .map(item => new dashboard.AddItem(item));
    });

  @Effect()
  toggleSelect$: Observable<Action> = this.actions$
    .ofType<dashboard.ToggleSelect>(dashboard.TOGGLE_SELECT)
    .map(action => action.payload)
    .mergeMap(itemId => {
      return Observable.zip(Observable.of(itemId), this.store.select(fromHome.getDashboardEntities));
    })
    .switchMap(([itemId, entities]) => {
      let stateModel: ItemModel = find(entities, { id: itemId });

      return Observable.of(new dashboard.ToggleSelectSuccess(new ItemModel({
        ...stateModel,
        selected: !stateModel.selected,
      })));
    });

  constructor(
    private actions$: Actions,
    private store: Store<fromHome.State>,
    private dashboardService: DashboardService,
  ) {}
}
