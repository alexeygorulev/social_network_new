import { constraints, fieldsSignIn, fieldsSignUp } from 'application/modules/Auth/constants';
import { Values } from 'application/modules/Auth/types';
import checkConstraints from 'utils/checkConstrains';

export const useError = (data: Values, fields: typeof fieldsSignIn | typeof fieldsSignUp) => {
  const allConstraints = Object.keys(constraints).reduce(
    (result, item) => ({ ...result, [item]: constraints[item] }),
    {},
  );
  const errors = Object.values(fields).reduce((result, item) => {
    // if (!this.disabledFields[item] && this.touched[item]) {
    return {
      ...result,
      [item]: checkConstraints(data[item], allConstraints[item]),
    };
    // }
    // return result;
  }, {});
  console.log(errors);

  return { errors };
};
