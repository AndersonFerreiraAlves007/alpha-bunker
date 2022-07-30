import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListTransactionsExtract from '.';

export default {
  title: 'ListTransactionsExtract',
  component: ListTransactionsExtract,
} as ComponentMeta<typeof ListTransactionsExtract>;

const Template: ComponentStory<typeof ListTransactionsExtract> = (args) => <ListTransactionsExtract {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  daysTransactions: [
    {
      date: '23/03/2022',
      transactions: [
        {
          type: 'deposit',
          value: 23
        }
      ]
    }
  ]
};
