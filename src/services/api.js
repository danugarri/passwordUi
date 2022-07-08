const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

const submitForm = (e, pass, repass, optionalQuestion) => {
  e.preventDefault();
  //   e.persist();
  return new Promise((resolve, reject) =>
    setTimeout(() => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)), 3000)
  );
};

export { submitForm };
