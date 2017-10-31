import { reducer } from './dashboard';
import * as fromDashboard from './dashboard';
import * as dashboard from '../actions/dashboard';
import { ItemModel } from '../../../shared/models';

describe('Dashboard reducer', () => {
  const item = new ItemModel({ id: 0, name: 'Test item' });

  const initialState: fromDashboard.State = {
    ids: [item.id],
    entities: {
      [item.id]: item,
    },
    selectedItemId: null,
  }

  describe('ADD_ITEM', () => {
    test('should add item to initial state', () => {
      const action = new dashboard.AddItem({
        id: 1,
        name: 'Test',
      });

      const result = reducer(fromDashboard.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('TOGGLE_SELECT_SUCCESS', () => {
    test('should select new item id', () => {
      item.selected = true;

      const action = new dashboard.ToggleSelectSuccess(item);

      const result = reducer(initialState, action);

      expect(result.selectedItemId).toBe(item.id);
    });

    test('selected attribute should be true in selected item', () => {
      item.selected = true;

      const action = new dashboard.ToggleSelectSuccess(item);

      const result = reducer(initialState, action);

      expect(result.entities[0].selected).toBe(true);
    });
  });

  describe('Selectors', () => {
    describe('getSelectedId', () => {
      it('should return the selected id', () => {
        const result = fromDashboard.getSelectedId({
          ...initialState,
          selectedItemId: item.id,
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
