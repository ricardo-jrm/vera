import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useEmpathy } from '@ricardo-jrm/empathy';
import { Vera, VeraProps } from '.';

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
    console.log(data[0]);
  }

  return <Vera data={data} {...args} />;
};
