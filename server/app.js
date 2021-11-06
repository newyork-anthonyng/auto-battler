const data = require('./data');

class Animal {
  constructor(id) {
    this.id = id;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.type,
      attack: this.attack,
      health: this.health
    };
  }

  speak() {
    console.log(`id: ${this.id}, type: ${this.type}`);
    console.log(`attack: ${this.attack}, health: ${this.health}`);
  }

  getHurt(damage) {
    this.health -= damage;
  }
}

function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random()*array.length)]
}

class Mosquito extends Animal {
  type = 'mosquito';
  attack = 1;
  health = 1;

  beforeBattle(currentTeam, otherTeam) {
    const randomAnimal = getRandomItemFromArray(otherTeam);

    randomAnimal.getHurt(1);

    const isTeam1 = this.id.startsWith('team1');
    const isTeam2 = !isTeam1;

    let team1;
    let team2;

    if (isTeam1) {
      team1 = currentTeam.map(animal => animal.getInfo());
      team2 = otherTeam.map(animal => animal.getInfo());
    } else {
      team1 = otherTeam.map(animal => animal.getInfo());
      team2 => currentTeam.map(animal => animal.getInfo());
    }

    return {
      from: this.id,
      to: randomAnimal.id,
      description: "mosquito.effect",
      team1: team1,
      team2: team2
    }
  }
}

class Fish extends Animal {
  type = 'fish';
  attack = 2;
  health = 3;
}

class Cricket extends Animal {
  type = 'cricket';
  attack = 2;
  health = 1;

}

class Pig extends Animal {
  type = 'pig';
  attack = 3;
  health = 2;
}

class ZombieCricket extends Animal {
  type = 'zombie.cricket';
  attack = 1;
  health = 1;
}

const team1 = [
  new Mosquito('team1.1'),
  new Fish('team1.2')
];

const team2 = [
  new Cricket('team2.1'),
  new Pig('team2.2')
];

const allEvents = [];

// check for effects
team1.forEach(animal => {
  if (animal.beforeBattle) {
    const beforeBattleEvent = animal.beforeBattle(team1, team2);
    allEvents.push(beforeBattleEvent);
  }
});

team2.forEach(animal => {
  if (animal.beforeBattle) {
    const beforeBattleEvent = animal.beforeBattle(team1, team2);
    allEvents.push(beforeBattleEvent);
  }
});

console.log(JSON.stringify(allEvents, null, 2));

// now attack!
