/* eslint-disable @typescript-eslint/no-explicit-any */
import * as vl from 'vega-lite-api';
import type {
  VeraFieldKind,
  VeraFieldType,
  VeraFieldScaleOpts,
  VeraFieldKey,
} from './types';

export const encodeField = (
  kind: VeraFieldKind,
  type: VeraFieldType,
  key: VeraFieldKey,
  scaleOpts?: VeraFieldScaleOpts,
) => {
  let field: any | null = null;

  switch (kind) {
    case 'tooltip':
      field = vl.tooltip();
      break;
    case 'y':
      field = vl.y();
      break;
    case 'x':
    default:
      field = vl.x();
      break;
  }

  switch (type) {
    case 'ordinal':
      field = field.fieldO(key);
      break;
    case 'quantitative':
      field = field.fieldQ(key);
      break;
    case 'nominal':
    default:
      field = field.fieldN(key);
      break;
  }

  if (scaleOpts) {
    field = field.scale(scaleOpts);
  }

  return field;
};
