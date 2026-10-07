import type { Service } from './types';

export const servicesMock: Service[] = [
  {
    id: '1',
    title: 'Коронка',
    description: 'Изготовление коронки из керамики',
    price: '10 000 ₽',
  },
  {
    id: '2',
    title: 'Винир',
    description: 'Красивая винировка',
    price: '8 000 ₽',
  },
  {
    id: '3',
    title: 'Съёмный протез',
    description: 'Крем-апекс',
    price: null,
  },
  {
    id: '4',
    title: 'Капа',
    description: 'Фиксация зуба капой',
    price: '5 000 ₽',
  },
  {
    id: '5',
    title: 'Починка',
    description: 'Ремонт разрушенного зуба',
    price: '3 000 ₽',
  },
  {
    id: '6',
    title: 'Отбеливание кап',
    description: 'Отбеливание капой',
    price: '2 500 ₽',
  },
];