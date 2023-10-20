import { constraintsTypes } from './checkConstrains';

type ConstraintType = (typeof constraintsTypes)[keyof typeof constraintsTypes];

interface RangeCondition {
  min?: number;
  max?: number;
}

export interface Constraint {
  type: ConstraintType;
  message: string;
  condition?: string | RangeCondition;
}

export function isRangeCondition(condition: any): condition is RangeCondition {
  return typeof condition === 'object' && ('min' in condition || 'max' in condition);
}
