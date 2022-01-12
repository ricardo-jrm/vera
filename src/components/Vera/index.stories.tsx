import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useEmpathy } from '@ricardo-jrm/empathy';
import { Vera } from '.';
import type { VeraProps } from './types';

export default {
  title: 'Vera',
  component: Vera,
  parameters: {
    componentSubtitle: 'Vera',
  },
} as Meta;

export const Cars: Story<VeraProps> = (args) => {
  const { data } = useEmpathy(
    'https://raw.githubusercontent.com/vega/vega-datasets/next/data/cars.json',
  );

  if (data) {
    // eslint-disable-next-line no-console
    console.log(data[0]);
  }

  return (
    <Vera
      data={data}
      mark="point"
      markOpts={{
        size: 150,
        opacity: 0.3,
      }}
      y={{
        key: 'Weight_in_lbs',
        type: 'quantitative',
        scale: { zero: false },
      }}
      x={{
        key: 'Horsepower',
        type: 'quantitative',
        scale: { zero: false },
      }}
      tooltip={{
        key: 'Name',
        type: 'nominal',
      }}
      {...args}
    />
  );
};
