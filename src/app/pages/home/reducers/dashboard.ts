import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import find from 'lodash/find';

import { ItemModel } from '../../../shared/models';
import { IItem } from '../../../shared/interfaces/item.interface';
import * as dashboard from '../actions/dashboard';

export interface State extends EntityState<ItemModel> {
  selectedItemId: number | null;
}

export const adapter: EntityAdapter<ItemModel> = createEntityAdapter<ItemModel>({
  selectId: (item: ItemModel) => item.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedItemId: null,
});

export function reducer(
  state = initialState,
  action: dashboard.Actions
): State {
  switch (action.type) {
    case dashboard.ADD_ITEM: {
      return {
        ...adapter.addOne(new ItemModel(action.payload), state),
        selectedItemId: state.selectedItemId,
      };
    }

    case dashboard.TOGGLE_SELECT: {
      let item: ItemModel = find(state.entities, { id: action.payload });
      let updateItem = {
        ...item,
        selected: !item.selected
      };

      return {
        ...adapter.updateOne({ id: action.payload, changes: updateItem }, state),
        selectedItemId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedItemId;
