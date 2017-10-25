import { Action } from '@ngrx/store';
import { IItem } from '../../../shared/interfaces/item.interface';
import { ItemModel } from '../../../shared/models';

export const ADD_ITEM = '[Dashboard] Add Item';
export const LOAD_ITEM = '[Dashboard] Load Item';
export const TOGGLE_SELECT = '[Dashboard] Select';
export const TOGGLE_SELECT_SUCCESS = '[Dashboard] Select Success';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: IItem) {}
}

export class LoadItem implements Action {
  readonly type = LOAD_ITEM;

  constructor(public payload: number) {}
}

export class ToggleSelect implements Action {
  readonly type = TOGGLE_SELECT;

  constructor(public payload: number) {}
}

export class ToggleSelectSuccess implements Action {
  readonly type = TOGGLE_SELECT_SUCCESS;

  constructor(public payload: ItemModel) {}
}

export type Actions = AddItem | LoadItem | ToggleSelect | ToggleSelectSuccess;
