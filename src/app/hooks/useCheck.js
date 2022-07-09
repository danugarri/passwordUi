import { useEffect, useState } from 'react';

export const useCheck = (password, secondPassword) => {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    password === secondPassword &&
    password.length === secondPassword.length &&
    password !== '' &&
    secondPassword !== ''
      ? setDisabled(false)
      : setDisabled(true);
  }, [password, secondPassword]);
  return [disabled];
};
