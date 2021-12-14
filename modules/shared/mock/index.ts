import { uuid } from 'uuidv4';

export interface Trip {
  id: string;
  img: string;
  title: string;
  price: number;
  period: number;
  country: string;
  description: string;
}

export const TRIPS: Trip[] = [
  {
    id: uuid(),
    title: 'Mermaid Beach Resort: The most joyful way to spend your holiday',
    price: 175,
    img: '/static/images/maldives.png',
    country: 'Maldives',
    period: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title: 'Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life',
    price: 300,
    img: '/static/images/cinnamon.png',
    country: 'Maldives',
    period: 7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title: 'Fihalhohi Island Resort: Luxury destination without compromise',
    price: 123,
    img: '/static/images/dhigu.png',
    country: 'Maldives',
    period: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title:
      'About District. Agra is a city on the banks of the river Yamuna in the northern state of Uttar Pradesh, India. It is 378 kilometres west of the state capital, Lucknow, 206 kilometres south of the national capital New Delhi, 58 kilometres south from Mathura and 125 kilometres north of Gwalior.',
    price: 243,
    img: '/static/images/agra.png',
    country: 'Indian',
    period: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title:
      'Munich is the capital and most populous city of Bavaria. With a population of 1,558,395 inhabitants as of 31 July 2020, it is the third-largest city in Germany',
    price: 176,
    img: '/static/images/munich.png',
    country: 'Germany',
    period: 7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title: 'SKI, YOGA & GOLF INSTRUCTION IN Châtel, Portes Du Soleil',
    price: 375,
    img: '/static/images/mountain-venture.png',
    country: 'Virginia',
    period: 14,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title:
      'Munich is the capital and most populous city of Bavaria. With a population of 1,558,395 inhabitants as of 31 July 2020, it is the third-largest city in Germany',
    price: 432,
    img: '/static/images/paris.png',
    country: 'France',
    period: 21,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  },
  {
    id: uuid(),
    title: 'London is the capital and largest city of England and the United Kingdom.',
    price: 155,
    img: '/static/images/queens-gambit.png',
    country: 'England',
    period: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum esse est ex impedit, iusto officia optio pariatur quos saepe. A aliquam assumenda at consequuntur corporis cum cumque deserunt dolor et explicabo fugit iste itaque, nisi obcaecati quasi qui reiciendis sapiente sit tempora, ullam unde veritatis voluptate voluptatem voluptatibus voluptatum!'
  }
];
