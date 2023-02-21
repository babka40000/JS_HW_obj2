export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    this.level = 1;
    this.health = 100;
    this.type = type;

    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else {
      throw new Error('Неизвестный персонаж');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}
