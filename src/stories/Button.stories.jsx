import { fn } from '@storybook/test';
import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    mode: 'secondary',
    label: 'Button',
  },
};

export const Danger = {
  args: {
    mode: 'danger',
    label: 'Button',
  },
};


export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


