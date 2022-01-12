/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
// import { vl } from './vl';
import {
  VeraRenderType,
  VeraFieldName,
  VeraFieldType,
  VeraMarkType,
  VeraMarkOpts,
} from './types';

/**
 * Vera props
 */
export interface VeraProps {
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
}

/**
 * Vera
 */
export const Vera = ({
  renderer = 'svg',
  data,
  mark = 'point',
  markOpts,
}: VeraProps) => {
  const renderRef = useRef<HTMLDivElement | null>(null);

  // register
  useEffect(() => {
    if (data) {
      vl.register(vega, vegaLite, {
        view: { renderer },
        init: (view: any) => {
          view.tooltip(new Handler().call);
        },
      });

      // mark
      // switch (mark) {
      //   case 'point':
      //   default:
      //     vl.markPoint(markOpts).encode(
      //       vl.x().fieldQ('Horsepower').scale({ zero: false }),
      //       vl.y().fieldQ('Cylinders').scale({ zero: false }),
      //     );
      //     break;
      // }

      const viz = vl
        .markPoint()
        .encode(
          vl.x().fieldQ('Horsepower'),
          vl.y().fieldQ('Cylinders'),
          vl.tooltip().fieldN('Horsepower'),
        );

      // set data
      viz
        .data(data)
        // .width(300)
        // .height(300)
        // .autosize({ type: 'fit', contains: 'padding' })
        .render()
        .then((viewElement: any) => {
          renderRef?.current?.appendChild(viewElement);
        });
    }
  }, [renderer, mark, markOpts, data]);

  return <div ref={renderRef} data-testid="vera-test-id" />;
};
