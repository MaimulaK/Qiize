const tableTennis = [
  {
    type: 'list',
    name: 'sopla',
    message: 'Как называется когда мяч попадает в край стола?',
    choices: [
      { name: 'Сопля', value: 1 },
      { name: 'Краек', value: 0 },
      { name: 'Цыка', value: 0 },
    ],
  },
  {
    type: 'list',
    name: 'country',
    message: 'Страна-чемпион мира в прошлом 2022 году?',
    choices: [
      { name: 'Германия', value: 0 },
      { name: 'Япония', value: 0 },
      { name: 'Китай', value: 1 },
    ],
  },
  {
    type: 'list',
    name: 'size',
    message: 'Акуальный размер мяча в настольном теннисе?',
    choices: [
      { name: '39', value: 0 },
      { name: '40+', value: 1 },
      { name: '40', value: 0 },
    ],
  },
  {
    type: 'list',
    name: 'size2',
    message: 'Размер стола в ширину?',
    choices: [
      { name: '1.52', value: 1 },
      { name: '1.90', value: 0 },
      { name: '1.4', value: 0 },
    ],
  },
  {
    type: 'list',
    name: 'elbrus',
    message: 'Кто обыграет меня вечером?',
    choices: [
      { name: 'Я', value: 1 },
      { name: 'Ну я', value: 1 },
      { name: 'Ну опять я', value: 1 },
    ],
  },
];

module.exports = tableTennis;
