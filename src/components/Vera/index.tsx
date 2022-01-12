/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { encodeField } from './encodeField';
import { VeraProps } from './types';

/**
 * Vera
 */
export const Vera = ({
  width,
  height,
  renderer = 'svg',
  data,
  mark = 'point',
  markOpts,
  x,
  y,
  tooltip,
}: VeraProps) => {
  const renderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data) {
      const root = renderRef?.current;

      // register
      vl.register(vega, vegaLite, {
        view: { renderer },
        init: (view: any) => {
          view.tooltip(new Handler().call);
        },
      });

      let viz: any = null;

      // mark
      switch (mark) {
        case 'line':
          viz = vl.markLine(markOpts);
          break;
        case 'point':
        default:
          viz = vl.markPoint(markOpts);
          break;
      }

      // encode
      viz = viz.encode(
        encodeField('x', x.type, x.key, x.scale),
        encodeField('y', y.type, y.key, y.scale),
        tooltip && encodeField('tooltip', tooltip.type, tooltip.key),
      );

      // set data
      viz = viz.data(data);

      // set options
      viz = viz.width(width).height(height);
      // .autosize({ type: 'fit', contains: 'padding' })

      // render
      viz.render().then((viewElement: any) => {
        if (root?.firstChild) {
          root?.removeChild(root?.firstChild);
        }
        root?.appendChild(viewElement);
      });
    }
  }, [renderer, mark, markOpts, data, width, height, x, y, tooltip]);

  return <div ref={renderRef} />;
};
