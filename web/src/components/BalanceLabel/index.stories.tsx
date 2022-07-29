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
  accountNumber: '1212122',
  agency: '1212',
  digitAccountV: '1',
  digitAgencyV: '2',
  balance: 0
};
