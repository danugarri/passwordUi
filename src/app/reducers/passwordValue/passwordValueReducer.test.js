import { passwordValueAction } from '../../actions/passwordValueAction';
import { passwordValueReducer } from './passwordValueReducer';

describe('The passwordValue Reducer', () => {
  const initialState = {
    password: '',
    secondPassword: '',
  };
  test('the initial state', () => {
    expect(passwordValueReducer(undefined, { type: undefined })).toEqual({
      password: '',
      secondPassword: '',
    });
  });
  test('What it returns passing passwordValue type', () => {
    expect(
      passwordValueReducer(initialState, passwordValueAction('1111111A', 'passwordValue'))
    ).toEqual({
      password: '1111111A',
      secondPassword: '',
    });
  });
  test('What it returns passing secondPasswordValue type', () => {
    expect(
      passwordValueReducer(initialState, passwordValueAction('1111111B', 'secondPasswordValue'))
    ).toEqual({
      password: '',
      secondPassword: '1111111B',
    });
  });
});
