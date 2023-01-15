import type { Meta, StoryObj } from '@storybook/svelte';

import WhiteCardList from '../components/WhiteCardList/WhiteCardList.svelte';

const meta = {
    title: 'Example/WhiteCardList',
    component: WhiteCardList,
    tags: ['autodocs']
} satisfies Meta<WhiteCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      whiteCards: [
        "Carta 1",
        "Carta 2",
        "Carta 3",
        "Carta 4",
        "Carta 5",
        "Carta 6",
        "Carta 7",
        "Carta 8",
        "Carta 9",
        "Carta 10",
      ]
    },
  };