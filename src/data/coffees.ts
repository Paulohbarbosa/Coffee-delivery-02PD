import expressoTradicional from '../assets/coffees/expresso.png'
import americano from '../assets/coffees/americano.png'
import expressoCremoso from '../assets/coffees/expresso_cremoso.png'
import gelado from '../assets/coffees/cafe_gelado.png'
import comLeite from '../assets/coffees/cafe_com_leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import chocolateQuente from '../assets/coffees/chocolate_quente.png'
import cubano from '../assets/coffees/cubano.png'
import havaiano from '../assets/coffees/havaiano.png'
import arabe from '../assets/coffees/arabe.png'
import irlandes from '../assets/coffees/irlandes.png'

import { CoffeeListsProps } from '../types'

export const coffeesData: CoffeeListsProps[] = [
  {
    id: 1,
    img: expressoTradicional,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '9,90',
  },
  {
    id: 2,
    img: americano,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    id: 3,
    img: expressoCremoso,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '9,90',
  },
  {
    id: 4,
    img: gelado,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '9,90',
  },
  {
    id: 5,
    img: comLeite,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '9,90',
  },
  {
    id: 6,
    img: latte,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9,90',
  },
  {
    id: 7,
    img: capuccino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '9,90',
  },
  {
    id: 8,
    img: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '9,90',
  },
  {
    id: 9,
    img: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '9,90',
  },
  {
    id: 10,
    img: chocolateQuente,
    tags: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '9,90',
  },
  {
    id: 11,
    img: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9,90',
  },
  {
    id: 12,
    img: havaiano,
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '9,90',
  },
  {
    id: 13,
    img: arabe,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '9,90',
  },
  {
    id: 14,
    img: irlandes,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '9,90',
  },
]
