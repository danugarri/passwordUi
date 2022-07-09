import { useEffect, useState } from 'react';

export const useCheck = (password, secondPassword) => {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    const passwordMatches =
      password === secondPassword && password.length === secondPassword.length;
    const passwordsNotEmpty = password !== '' && secondPassword !== '';
    // Conditions
    passwordMatches && passwordsNotEmpty ? setDisabled(false) : setDisabled(true);
  }, [password, secondPassword]);
  return [disabled];
};
