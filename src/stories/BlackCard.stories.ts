import type { Meta, StoryObj } from '@storybook/svelte';

import BlackCard from '../components/BlackCard/BlackCard.svelte';

const meta = {
    title: 'Example/BlackCard',
    component: BlackCard,
    tags: ['autodocs']
} satisfies Meta<BlackCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      text: 'Hello World',
    },
  };