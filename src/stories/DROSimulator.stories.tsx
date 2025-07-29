import type { Meta, StoryObj } from '@storybook/nextjs';

import { DROSimulator } from '@/components/DROSimulator';

const meta = {
  title: 'DRO/DROSimulator',
  component: DROSimulator,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A faithful web simulator for the Electronica EL400/MagXact MX-100M digital readout (DRO). Features a 3-axis display, numeric keypad, axis controls, and function keys matching the physical hardware.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DROSimulator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};