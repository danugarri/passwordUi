import { useEffect, useState } from 'react';

export const useCheck = (password, secondPassword) => {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    const passwordMatches =
      password === secondPassword && password.length === secondPassword.length;
    const passwordsNotEmpty = password !== '' && secondPassword !== '';
    // REGEX
    //checking expression
    const regularExpression = /[a-z-0-9]+@([a-z])+\.[a-z]+/;
    const checkedExpression = regularExpression.test(password);
    // Conditions
    passwordMatches && passwordsNotEmpty && checkedExpression
      ? setDisabled(false)
      : setDisabled(true);
  }, [password, secondPassword]);
  return [disabled];
};
