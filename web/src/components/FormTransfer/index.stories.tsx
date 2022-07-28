import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormTransfer from '.';

export default {
  title: 'FormTransfer',
  component: FormTransfer,
} as ComponentMeta<typeof FormTransfer>;

const Template: ComponentStory<typeof FormTransfer> = (args) => <FormTransfer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'FormTransfer',
};
