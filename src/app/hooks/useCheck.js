import { useEffect, useState } from 'react';

// REGEX pattern
export const regularExpression = /[A-Za-z0-9]{8,24}/;

export const useCheck = (password, secondPassword) => {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    const passwordMatches =
      password === secondPassword && password.length === secondPassword.length;
    const passwordsNotEmpty = password !== '' && secondPassword !== '';
    // REGEX
    //checking expression
    // Between 8- 24 character, being upper or lower case or numbers between 0 and 9:
    // [A-Za-z0-9]{8,24}
    const checkedExpression = regularExpression.test(password);
    // Conditions
    passwordMatches && passwordsNotEmpty && checkedExpression
      ? setDisabled(false)
      : setDisabled(true);
  }, [password, secondPassword]);
  return [disabled];
};
