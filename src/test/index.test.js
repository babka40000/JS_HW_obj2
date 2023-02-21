import Character, {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../index';

test('name lenght', () => {
  expect(() => new Character('Q', 'Bowman')).toThrowError('Имя должно быть от 2 до 10 символов');
  expect(() => new Character('VeryLongName', 'Bowman')).toThrowError('Имя должно быть от 2 до 10 символов');
});

test('unknown character', () => {
  expect(() => new Character('Legolaz', 'Plotnik')).toThrowError('Неизвестный персонаж');
});

test.each([
  ['Bowman', 25, 25],
  ['Swordsman', 40, 10],
  ['Magician', 10, 40],
  ['Undead', 25, 25],
  ['Zombie', 40, 10],
  ['Daemon', 10, 40],
])(
  ('check skills for %s'),
  (heroClass, attack, defence) => {
    const hero = new Character('name', heroClass);
    expect(hero.attack).toBe(attack);
    expect(hero.defence).toBe(defence);
  },
);

test('check class Bowman', () => {
  const result = new Bowman('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Swordsman', () => {
  const result = new Swordsman('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Magician', () => {
  const result = new Magician('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Undead', () => {
  const result = new Undead('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Zombie', () => {
  const result = new Zombie('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Daemon', () => {
  const result = new Daemon('name');
  expect(result).toBeInstanceOf(Character);
});

test('level up check', () => {
  const hero = new Character('name', 'Bowman');

  hero.health = 90;
  hero.levelUp();
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(2);
  expect(hero.defence).toBe(30);
  expect(hero.attack).toBe(30);

  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError('Персонаж мертв');
});

test('damage check', () => {
  const hero = new Character('name', 'Bowman');

  hero.damage(100);
  expect(hero.health).toBe(25);

  hero.health = 0;
  expect(() => hero.damage(100)).toThrowError('Персонаж мертв');
});
