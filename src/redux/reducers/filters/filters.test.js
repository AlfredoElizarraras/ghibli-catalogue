import deepFreeze from 'deep-freeze';
import changeFilter from '../../actions/filtersActions';
import filters from './filters';

describe('Filters reducer', () => {
  it('Should change the filters object without mutating the state', () => {
    const stateBefore = {
      director: 'Hayao',
      producer: 'Tao',
    };
    const stateAfter = {
      director: 'Toru',
      producer: 'Tao',
    };
    const action = changeFilter({ director: 'Toru' });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });

  it('Should return null if in the state is only one filter and this is ALL', () => {
    const stateBefore = {
      director: 'Toru',
    };
    const stateAfter = null;
    const action = changeFilter({ director: 'ALL' });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });

  it('Should remove a filter if it is value is null', () => {
    const stateBefore = {
      director: 'Toru',
      producer: 'Hayao',
    };
    const stateAfter = {
      producer: 'Hayao',
    };
    const action = changeFilter({ director: 'ALL' });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });

  it('Should add new filters when the filter is not in the state', () => {
    const stateBefore = {
      producer: 'Tao',
    };
    const stateAfter = {
      director: 'Toru',
      producer: 'Tao',
    };
    const action = changeFilter({ director: 'Toru' });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      filters(stateBefore, action),
    ).toEqual(stateAfter);
  });
});
