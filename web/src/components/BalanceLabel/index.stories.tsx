import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BalanceLabel from '.';

export default {
  title: 'BalanceLabel',
  component: BalanceLabel,
} as ComponentMeta<typeof BalanceLabel>;

const Template: ComponentStory<typeof BalanceLabel> = (args) => <BalanceLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'BalanceLabel',
};
