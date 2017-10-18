import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromDashboard from './dashboard';
import * as fromRoot from '../../../reducers';

export interface HomeState {
  dashboard: fromDashboard.State;
}

export interface State extends fromRoot.State {
  'home': HomeState;
}

export const REDUCERS = {
  dashboard: fromDashboard.reducer,
};

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getDashboardState = createSelector(
  getHomeState,
  state => state.dashboard
);

export const getSelectedItemId = createSelector(
  getDashboardState,
  fromDashboard.getSelectedId
);

export const {
  selectIds: getDashboardIds,
  selectEntities: getDashboardEntities,
  selectAll: getAllDashboardItems,
  selectTotal: getTotalDashboardItems,
} = fromDashboard.adapter.getSelectors(getDashboardState);

export const getSelectedItem = createSelector(
  getDashboardEntities,
  getSelectedItemId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
