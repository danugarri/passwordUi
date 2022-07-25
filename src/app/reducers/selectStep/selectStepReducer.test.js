import { selectStepAction } from '../../actions/selectStepAction';
import { selectStepReducer } from './selectStepReducer';

describe('The selectStep Reducer', () => {
  const initialState = {
    step1: true,
    step2: false,
    step3: false,
  };
  test('the initial state', () => {
    expect(selectStepReducer(undefined, { type: undefined })).toEqual({
      steps: {
        step1: true,
        step2: false,
        step3: false,
      },
    });
  });
  test('What it returns passing 3 booleans', () => {
    expect(selectStepReducer(initialState, selectStepAction(false, true, false))).toEqual({
      steps: {
        step1: false,
        step2: true,
        step3: false,
      },
    });
  });
});
