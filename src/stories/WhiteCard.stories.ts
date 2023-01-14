import type { Meta, StoryObj } from '@storybook/svelte';

import WhiteCard from '../components/WhiteCard/WhiteCard.svelte';

const meta = {
    title: 'Example/WhiteCard',
    component: WhiteCard,
    tags: ['autodocs']
} satisfies Meta<WhiteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      text: 'Hello World',
    },
  };