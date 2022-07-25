import { renderHook } from '@testing-library/react-hooks';
import { useEffect, useState } from 'react';
import { useCheck } from './useCheck';

describe('The useCheck hook', () => {
  test('if the hook return false when both password are the same', () => {
    const { result, rerender } = renderHook(
      ({ password, secondPassword }) => {
        const [disabled, setDisabled] = useState(true);
        useEffect(() => {
          const passwordMatches =
            password === secondPassword && password.length === secondPassword.length;
          const passwordsNotEmpty = password !== '' && secondPassword !== '';
          // REGEX
          const fullPattern = /[A-Za-z0-9]{8,24}/;
          //checking expression
          const checkedExpression = fullPattern.test(password);
          // Conditions
          passwordMatches && passwordsNotEmpty && checkedExpression
            ? setDisabled(false)
            : setDisabled(true);
        }, [password, secondPassword]);

        return [disabled];
      },
      {
        initialProps: {
          password: '1111111A',
          secondPassword: '1111111A',
        },
      }
    );
    //   Asertion
    // Passing these values as initialState:
    console.log(result.current);
    expect(result.current[0]).toBe(false);
    //  re-render the same hook with different props
    rerender({ password: '1243645B', secondPassword: '1111111A' });
    console.log(result.current);
    expect(result.current[0]).toBe(true);
  });
  test('if the hook returns true if one of the two passwords do not has an upperCase letter', () => {
    const { result, rerender } = renderHook(() => useCheck('1111111a', '1111111a'));
    // Missing at least one upperCase letter
    expect(result.current[0]).toBe(true);
    rerender({ password: '111111ab', secondPassword: '111111ab' });
    expect(result.current[0]).toBe(true);
  });
  test('if the hook returns true if one of the two passwords do not has a number', () => {
    const { result, rerender } = renderHook(() => useCheck('bbbbbbbb', 'bbbbbbbb'));
    // Missing at least one upperCase letter
    expect(result.current[0]).toBe(true);
    rerender({ password: 'aaaaaaab', secondPassword: 'aaaaaaab' });
    expect(result.current[0]).toBe(true);
  });
});
