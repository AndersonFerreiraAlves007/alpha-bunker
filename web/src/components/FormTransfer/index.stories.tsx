import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormTransfer from '.';

export default {
  title: 'FormTransfer',
  component: FormTransfer,
  argTypes: { handleTransfer: { action: 'clicked' } },
} as ComponentMeta<typeof FormTransfer>;

const Template: ComponentStory<typeof FormTransfer> = (args) => <FormTransfer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  accountNumberOrigin: '1212122',
  agencyOrigin: '1212',
  digitAccountVOrigin: '1',
  digitAgencyVOrigin: '2'
};
