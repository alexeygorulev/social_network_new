import { constraintsTypes } from 'utils/checkConstrains';

export const authSteps = {
  signIn: 'signIn',
  signUp: 'signUp',
} as const;

export const fieldsSignUp = {
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  login: 'login',
  email: 'email',
  password: 'password',
  duplicatePassword: 'duplicatePassword',
};

export const fieldsSignIn = {
  username: 'username',
  password: 'password',
};

export const constraints = {
  [fieldsSignIn.username]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать логин',
    },
  ],
  [fieldsSignIn.password]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать пароль',
    },
    {
      type: constraintsTypes.range,
      message: 'Пароль должен быть длиной от 8 до 16 символов',
      condition: { min: 8, max: 16 },
    },
    {
      type: constraintsTypes.pattern,
      message: 'Пароль должен состоять только из латинских символов и цифр',
      condition: '[0-9A-Za-z]*',
    },
    {
      type: constraintsTypes.includes,
      message: 'Пароль должен включать в себя хотя бы одну латинску букву',
      condition: '[A-Za-z]',
    },
    {
      type: constraintsTypes.includes,
      message: 'Пароль должен включать в себя хотя бы одну строчную латинскую букву',
      condition: '[a-z]',
    },
    {
      type: constraintsTypes.includes,
      message: 'Пароль должен включать в себя хотя бы одну цифру',
      condition: '[0-9]',
    },
  ],
};
