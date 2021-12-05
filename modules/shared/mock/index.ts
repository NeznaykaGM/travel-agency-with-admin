export interface Travels {
  id: number;
  img: string;
  name: string;
  price: string;
  period: string;
  country: string;
  descriptions?: string;
}

export const TRAVELS: Travels[] = [
  {
    id: 1,
    name: 'Mermaid Beach Resort: The most joyful way to spend your holiday',
    price: '$175',
    img: '/static/images/maldives.png',
    country: 'Maldives',
    period: '4 days'
  },
  {
    id: 1,
    name: 'Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life',
    price: '$300',
    img: '/static/images/cinnamon.png',
    country: 'Maldives',
    period: '4 days'
  },
  {
    id: 1,
    name: 'Fihalhohi Island Resort: Luxury destination without compromise',
    price: '$375',
    img: '/static/images/dhigu.png',
    country: 'Maldives',
    period: '4 days'
  }
];

export const CartProducts = [];
