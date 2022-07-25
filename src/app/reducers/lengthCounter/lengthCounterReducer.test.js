import { lengthCounterAction } from '../../actions/lengthCounterAction';
import { lengthCounterReducer } from './lengthCounterReducer';

describe('The lengthCounter reducer', () => {
  const initialState = {
    hintLength: 0,
    passwordLength: 0,
    secondPasswordLength: 0,
  };
  test('the initial state', () => {
    expect(lengthCounterReducer(undefined, { type: undefined })).toEqual({
      hintLength: 0,
      passwordLength: 0,
      secondPasswordLength: 0,
    });
  });
  test('What it returns passing hintLength type', () => {
    expect(lengthCounterReducer(initialState, lengthCounterAction(3, 'hintLength'))).toEqual({
      hintLength: 3,
      passwordLength: 0,
      secondPasswordLength: 0,
    });
  });
  test('What it returns  passing a  passwordLength type', () => {
    expect(lengthCounterReducer(initialState, lengthCounterAction(20, 'passwordLength'))).toEqual({
      hintLength: 0,
      passwordLength: 20,
      secondPasswordLength: 0,
    });
  });
  test('what it returns passing secondPasswordLength type', () => {
    expect(
      lengthCounterReducer(initialState, lengthCounterAction(10, 'secondPasswordLength'))
    ).toEqual({
      hintLength: 0,
      passwordLength: 0,
      secondPasswordLength: 10,
    });
  });
});
