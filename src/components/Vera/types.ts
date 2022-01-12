/* eslint-disable @typescript-eslint/no-explicit-any */
export type VeraRenderType = 'svg' | 'canvas';

export type VeraFieldKey = string;
export type VeraFieldKind = 'x' | 'y' | 'tooltip';
export type VeraFieldScaleOpts = {
  zero?: boolean;
};
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

/**
 * Vera component interface
 */
export interface VeraProps {
  width?: number;
  height?: number;
  renderer?: VeraRenderType;
  /**
   * Data to visualize
   */
  data: any | undefined;
  /**
   * Mark type to render
   */
  mark?: VeraMarkType;
  markOpts?: VeraMarkOpts;
  x: {
    key: VeraFieldKey;
    type: VeraFieldType;
    scale?: VeraFieldScaleOpts;
  };
  y: {
    key: VeraFieldKey;
    type: VeraFieldType;
    scale?: VeraFieldScaleOpts;
  };
  tooltip?: {
    key: VeraFieldKey;
    type: VeraFieldType;
  };
}
