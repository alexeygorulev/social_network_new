import typeChecker from './typeChecker';
import { Constraint, isRangeCondition } from './types';

export const constraintsTypes = {
  required: 'required',
  enum: 'enum',
  pattern: 'pattern',
  includes: 'includes',
  equal: 'equal',
  range: 'range',
  length: 'range',
  numberCompare: 'numberCompare',
  yearRange: 'yearRange',
  dateRange: 'dateRange',
  dateCompare: 'dateCompare',
};

export default function checkConstraints(value: string, constraints: Constraint[]) {
  if (!constraints) return null;

  for (const constrain of constraints) {
    if (constrain.type === constraintsTypes.required) {
      if (typeChecker.isBoolean(value) && !value) return constrain.message;
      if (typeChecker.isEmpty(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.enum && typeChecker.isEmpty(value)) return constrain.message;

    if (constrain.type === constraintsTypes.pattern) {
      const regExp = new RegExp(`^${constrain.condition}$`);
      if (value && !regExp.test(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.includes) {
      const regExp = new RegExp(`${constrain.condition}`);
      if (value && !value.match(regExp)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.range) {
      const numberValue = parseFloat(value);
      if (!isNaN(numberValue)) {
        if (isRangeCondition(constrain.condition)) {
          if (typeof constrain.condition.min === 'number' && numberValue < constrain.condition.min)
            return constrain.message;
          if (typeof constrain.condition.max === 'number' && numberValue > constrain.condition.max)
            return constrain.message;
        }
      }
    }
  }
  return null;
}
