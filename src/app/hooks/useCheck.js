import { useEffect, useState } from 'react';

// REGEX pattern
// Between 8- 24 characters, being upper or lower case or numbers between 0 and 9.
//  At least 1 upperCase letter and a number
export const regularExpression = /[A-Za-z0-9]{8,24}/;
export const regexUpperCase = /[A-Z]+/;
export const regexNumber = /[0-9]+/;

export const useCheck = (password, secondPassword) => {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    const passwordMatches =
      password === secondPassword && password.length === secondPassword.length;
    const passwordsNotEmpty = password !== '' && secondPassword !== '';
    // REGEX
    const fullPattern = /[A-Za-z0-9]{8,24}[A-Z]+[0-9]+/;
    //checking expression
    const checkedExpression = fullPattern.test(password);
    // Conditions
    passwordMatches && passwordsNotEmpty && checkedExpression
      ? setDisabled(false)
      : setDisabled(true);
  }, [password, secondPassword]);

  return [disabled];
};
