import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { StoreModule, combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { marbles } from 'rxjs-marbles';

import * as fromRoot from '../../../reducers';
import * as fromHome from '../reducers';
import { DashboardEffects } from './dashboard';
import * as dashboard from '../actions/dashboard';
import { ItemModel } from '../../../shared/models';
import { IItem } from '../../../shared/interfaces/item.interface';
import { DashboardService } from '../services/dashboard.service';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}


describe('DashboardEffects', () => {
  let effects: DashboardEffects;
  let actions$: TestActions;
  let dashboardService: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          home: combineReducers(fromHome.reducers),
        })
      ],
      providers: [
        DashboardEffects,
        {
          provide: DashboardService,
          useValue: { loadItem: jest.fn() },
        },
        { provide: Actions, useFactory: getActions },
      ],
    });

    effects = TestBed.get(DashboardEffects);
    dashboardService = TestBed.get(DashboardService);
    actions$ = TestBed.get(Actions);
  });

  describe('loadItem$', () => {
    test('should return a new dashboard.AddItem', marbles((m) => {
      const item = { id: 1, name: 'Test' } as IItem;
      const action = new dashboard.LoadItem(1);
      const completion = new dashboard.AddItem(item);

      actions$.stream = m.hot('-a', { a: action });
      const response = m.cold('-a|', { a: item });
      const expected = m.cold('--b', { b: completion });
      dashboardService.loadItem = jest.fn(() => response);

      m.expect(effects.loadItem$).toBeObservable(expected);
    }));
  });
});
