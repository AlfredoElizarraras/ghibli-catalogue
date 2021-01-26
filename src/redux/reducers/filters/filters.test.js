import deepFreeze from 'deep-freeze';
import changeFilter from '../../actions/filtersActions';
import filters from './filters';

describe('Filters reducer', () => {
  it('Should change the filters object without mutating the state', () => {
    const stateBefore = 'Hayao';
    const stateAfter = 'Toru';
    const action = changeFilter('Toru');

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });

  it('Should return null if the reducer gets an ALL', () => {
    const stateBefore = 'Toru';
    const stateAfter = null;
    const action = changeFilter('ALL');

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });
});
