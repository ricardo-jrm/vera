export type VeraRenderType = 'svg' | 'canvas';

export type VeraFieldName = string;

export type VeraFieldType =
  | 'nominal'
  | 'quantitative'
  | 'temporal'
  | 'ordinal'
  | 'geojson';

export type VeraMarkType =
  | 'arc'
  | 'area'
  | 'bar'
  | 'circle'
  | 'geoshape'
  | 'line'
  | 'point'
  | 'rect'
  | 'rule'
  | 'square'
  | 'text'
  | 'tick';

export type VeraMarkOpts = {
  size?: number;
  /**
   * Opacity 0 - 1
   */
  opacity?: number;
  /**
   * tooltip
   */
  tooltip?: boolean;
};
