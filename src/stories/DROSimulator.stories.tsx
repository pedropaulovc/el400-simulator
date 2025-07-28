import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

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
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component',
    },
  },
} satisfies Meta<typeof DROSimulator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-dro-wrapper',
  },
  parameters: {
    docs: {
      description: {
        story: 'DRO simulator with a custom CSS class applied for styling flexibility.',
      },
    },
  },
};

export const Centered: Story = {
  args: {
    className: 'dro-centered',
  },
  parameters: {
    docs: {
      description: {
        story: 'DRO simulator centered in the viewport using custom CSS.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        padding: '1rem'
      }}>
        <Story />
      </div>
    ),
  ],
};